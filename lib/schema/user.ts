import { z } from "zod";

export const userIdSchema = z.object({
  id: z.string().uuid(),
});

export const userCreateSchema = z.object({
  email: z.string().trim().email().max(255),
  nom: z.string().trim().min(1).max(80),
  prenom: z.string().trim().min(1).max(80),
  telephone: z.string().trim().min(6).max(30),
  mot_de_passe: z.string().min(8).max(128),
});

export const userUpdateSchema = userCreateSchema.omit({ mot_de_passe: true }).extend({
  id: z.string().uuid(),
  status: z.enum(["active", "inactive"]).optional(),
});

export const userDeleteSchema = z.object({ id: z.string().uuid() });

export const loginSchema = z.object({
  email: z.string().trim().email(),
  mot_de_passe: z.string().min(1),
});

export const addressSchema = z.object({
  rue: z.string().trim().min(1).max(160),
  ville: z.string().trim().min(1).max(80),
  code_postal: z.string().trim().min(3).max(12),
  complement: z.string().trim().max(160).optional(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
export type AddressInput = z.infer<typeof addressSchema>;