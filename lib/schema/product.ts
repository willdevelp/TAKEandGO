import { z } from "zod";

export const categorySchema = z.object({
  id: z.coerce.number().int().positive().optional(),
  nom: z.string().trim().min(1, "Der Name ist erforderlich.").max(80),
});

export const productIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const productCreateSchema = z.object({
  nom: z.string().trim().min(1, "Der Name ist erforderlich.").max(120),
  quantite: z.string().trim().min(1).max(40),
  prix: z.coerce.number().finite().nonnegative(),
  categorie_id: z.coerce.number().int().positive(),
  image: z.string().trim().url().max(500).optional().or(z.literal("")),
});

export const productUpdateSchema = productCreateSchema
  .partial()
  .extend({ id: z.coerce.number().int().positive() });

export type CategoryInput = z.infer<typeof categorySchema>;
export type ProductCreateInput = z.infer<typeof productCreateSchema>;
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;