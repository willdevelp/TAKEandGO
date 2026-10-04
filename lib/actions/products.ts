"use server";

import {
  categorySchema,
  productCreateSchema,
  productIdSchema,
  productUpdateSchema,
} from "@/lib/schema/product";
import {
  createProduct,
  deleteProduct,
  listCategories,
  listFeaturedProducts,
  listProducts,
  updateProduct,
} from "@/lib/queries/products";

export async function listFeaturedProductsAction() {
  try {
    return { success: true as const, data: await listFeaturedProducts() };
  } catch {
    return { success: false as const, error: "Impossible de charger les produits" };
  }
}

export async function listProductsAction() {
  try {
    return { success: true as const, data: await listProducts() };
  } catch {
    return { success: false as const, error: "Impossible de charger les produits" };
  }
}

export async function listCategoriesAction() {
  try {
    return { success: true as const, data: await listCategories() };
  } catch {
    return { success: false as const, error: "Impossible de charger les catégories" };
  }
}

export async function createProductAction(input: unknown) {
  const parsed = productCreateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await createProduct(parsed.data) };
  } catch {
    return { success: false as const, error: "Impossible de créer le produit" };
  }
}

export async function updateProductAction(input: unknown) {
  const parsed = productUpdateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await updateProduct(parsed.data) };
  } catch {
    return { success: false as const, error: "Impossible de modifier le produit" };
  }
}

export async function deleteProductAction(input: unknown) {
  const parsed = productIdSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await deleteProduct(parsed.data.id) };
  } catch {
    return { success: false as const, error: "Impossible de supprimer le produit" };
  }
}

export async function validateCategory(input: unknown) {
  return categorySchema.safeParse(input);
}