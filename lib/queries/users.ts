import { getDb } from "@/lib/db";
import type { UserCreateInput } from "@/lib/schema/user";

export async function listUsers() {
  return getDb()`
    SELECT id, email, nom, prenom, telephone, created_at
    FROM utilisateurs
    ORDER BY created_at DESC
  `;
}

export async function getUserByEmail(email: string) {
  const rows = await getDb()`SELECT * FROM utilisateurs WHERE email = ${email} LIMIT 1`;
  return rows[0] ?? null;
}

export async function createUser(input: UserCreateInput, passwordHash: string) {
  const user = {
    email: input.email,
    nom: input.nom,
    prenom: input.prenom,
    telephone: input.telephone,
  };
  const rows = await getDb()`
    INSERT INTO utilisateurs (email, nom, prenom, telephone, mot_de_passe_hash)
    VALUES (${user.email}, ${user.nom}, ${user.prenom}, ${user.telephone}, ${passwordHash})
    RETURNING id, email, nom, prenom, telephone, created_at
  `;
  return rows[0];
}

export async function updateUser({ id, ...input }: import("@/lib/schema/user").UserUpdateInput) {
  const updates = [
    ["email", input.email],
    ["nom", input.nom],
    ["prenom", input.prenom],
    ["telephone", input.telephone],
    ["actif", input.status === undefined ? undefined : input.status === "active"],
  ] as const;
  const fields = updates.filter(([, value]) => value !== undefined);
  if (fields.length === 0) return null;

  const assignments = fields.map(([column], index) => `${column} = $${index + 1}`).join(", ");
  const values = fields.map(([, value]) => value);
  const rows = await getDb().query(
    `UPDATE utilisateurs SET ${assignments} WHERE id = $${values.length + 1}
     RETURNING id, email, nom, prenom, telephone, created_at`,
    [...values, id],
  );
  return rows[0] ?? null;
}

export async function deleteUser(id: string) {
  const rows = await getDb().query(
    "DELETE FROM utilisateurs WHERE id = $1 RETURNING id",
    [id],
  );
  return rows.length > 0;
}