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
    return { success: false as const, error: "Die Produkte konnten nicht geladen werden." };
  }
}

export async function listProductsAction() {
  try {
    return { success: true as const, data: await listProducts() };
  } catch {
    return { success: false as const, error: "Die Produkte konnten nicht geladen werden." };
  }
}

export async function listCategoriesAction() {
  try {
    return { success: true as const, data: await listCategories() };
  } catch {
    return { success: false as const, error: "Die Kategorien konnten nicht geladen werden." };
  }
}

export async function createProductAction(input: unknown) {
  const parsed = productCreateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await createProduct(parsed.data) };
  } catch {
    return { success: false as const, error: "Das Produkt konnte nicht erstellt werden." };
  }
}

export async function updateProductAction(input: unknown) {
  const parsed = productUpdateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await updateProduct(parsed.data) };
  } catch {
    return { success: false as const, error: "Das Produkt konnte nicht aktualisiert werden." };
  }
}

export async function deleteProductAction(input: unknown) {
  const parsed = productIdSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await deleteProduct(parsed.data.id) };
  } catch {
    return { success: false as const, error: "Das Produkt konnte nicht gelöscht werden." };
  }
}

export async function validateCategory(input: unknown) {
  return categorySchema.safeParse(input);
}