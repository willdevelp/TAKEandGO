import { z } from "zod";

export const orderStatusSchema = z.enum([
  "en_attente",
  "confirmee",
  "prete",
  "livree",
  "annulee",
]);

export const orderItemSchema = z.object({
  produit_id: z.coerce.number().int().positive(),
  quantite: z.coerce.number().int().positive().max(100),
  notes: z.string().trim().max(500).optional(),
});

export const orderCreateSchema = z.object({
  nom_utilisateur: z.string().trim().min(1).max(160),
  telephone: z.string().trim().max(30).nullable().optional(),
  items: z.array(orderItemSchema).min(1),
});

export const orderStatusUpdateSchema = z.object({
  id: z.string().uuid(),
  statut: orderStatusSchema,
});

export type OrderCreateInput = z.infer<typeof orderCreateSchema>;
export type OrderStatus = z.infer<typeof orderStatusSchema>;