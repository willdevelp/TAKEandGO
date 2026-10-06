"use server";

import { randomUUID, scrypt } from "node:crypto";
import { promisify } from "node:util";
import { createUser, deleteUser, getUserByEmail, listUsers, updateUser } from "@/lib/queries/users";
import { loginSchema, userCreateSchema, userDeleteSchema, userUpdateSchema } from "@/lib/schema/user";

const deriveKey = promisify(scrypt);

export async function listUsersAction() {
  try {
    return { success: true as const, data: await listUsers() };
  } catch (error) {
    console.error("Impossible de charger les clients:", error);
    return { success: false as const, error: "Die Kunden konnten nicht geladen werden." };
  }
}

async function hashPassword(password: string) {
  const salt = randomUUID();
  const derivedKey = (await deriveKey(password, salt, 64)) as Buffer;
  return `${salt}:${derivedKey.toString("hex")}`;
}

export async function registerUserAction(input: unknown) {
  const parsed = userCreateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    if (await getUserByEmail(parsed.data.email)) {
      return { success: false as const, error: "Diese E-Mail-Adresse wird bereits verwendet." };
    }

    const passwordHash = await hashPassword(parsed.data.mot_de_passe);
    return { success: true as const, data: await createUser(parsed.data, passwordHash) };
  } catch {
    return { success: false as const, error: "Das Konto konnte nicht erstellt werden." };
  }
}

export async function updateUserAction(input: unknown) {
  const parsed = userUpdateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };
  try {
    return { success: true as const, data: await updateUser(parsed.data) };
  } catch {
    return { success: false as const, error: "Der Kunde konnte nicht aktualisiert werden." };
  }
}

export async function deleteUserAction(input: unknown) {
  const parsed = userDeleteSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };
  try {
    return { success: true as const, data: await deleteUser(parsed.data.id) };
  } catch {
    return { success: false as const, error: "Der Kunde konnte nicht gelöscht werden." };
  }
}

async function verifyPassword(password: string, storedHash: string) {
  const [salt, expected] = storedHash.split(":");
  if (!salt || !expected) return false;
  const derivedKey = (await deriveKey(password, salt, 64)) as Buffer;
  return derivedKey.toString("hex") === expected;
}

export async function loginUserAction(input: unknown) {
  const parsed = loginSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };
  try {
    const user = await getUserByEmail(parsed.data.email);
    if (!user || !(await verifyPassword(parsed.data.mot_de_passe, user.mot_de_passe_hash))) {
      return { success: false as const, error: "E-Mail-Adresse oder Passwort ist falsch." };
    }
    return {
      success: true as const,
      data: { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom },
    };
  } catch {
    return { success: false as const, error: "Die Anmeldung ist fehlgeschlagen." };
  }
}