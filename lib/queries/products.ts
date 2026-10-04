import { getDb } from "@/lib/db";
import type { ProductCreateInput, ProductUpdateInput } from "@/lib/schema/product";

const productListQuery = `
  SELECT p.*, c.nom AS categorie_nom
  FROM produits p
  LEFT JOIN categories c ON c.id = p.categorie_id
`;

export async function listProducts() {
  return getDb().query(`${productListQuery} ORDER BY p.id DESC`);
}

export async function listFeaturedProducts() {
  return getDb().query(`${productListQuery} ORDER BY p.id DESC LIMIT 6`);
}

export async function listCategories() {
  return getDb()`SELECT * FROM categories ORDER BY nom`;
}

export async function getProduct(id: number) {
  const rows = await getDb()`SELECT * FROM produits WHERE id = ${id} LIMIT 1`;
  return rows[0] ?? null;
}

export async function createProduct(input: ProductCreateInput) {
  const rows = await getDb()`
    INSERT INTO produits (nom, quantite, prix, categorie_id, image)
    VALUES (${input.nom}, ${input.quantite}, ${input.prix}, ${input.categorie_id}, ${input.image || null})
    RETURNING *
  `;
  return rows[0];
}

export async function updateProduct({ id, ...input }: ProductUpdateInput) {
  if (Object.values(input).every((value) => value === undefined)) {
    return getProduct(id);
  }

  const rows = await getDb()`
    UPDATE produits
    SET nom = COALESCE(${input.nom ?? null}, nom),
        quantite = COALESCE(${input.quantite ?? null}, quantite),
        prix = COALESCE(${input.prix ?? null}, prix),
        categorie_id = COALESCE(${input.categorie_id ?? null}, categorie_id),
        image = COALESCE(${input.image ?? null}, image)
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] ?? null;
}

export async function deleteProduct(id: number) {
  const rows = await getDb().query(
    "DELETE FROM produits WHERE id = $1 RETURNING id",
    [id],
  );
  return rows.length > 0;
}