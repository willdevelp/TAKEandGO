import { getDb } from "@/lib/db";
import type { OrderCreateInput, OrderStatus } from "@/lib/schema/order";

export async function listOrders() {
  return getDb()`
    SELECT c.*,
      COALESCE(order_items.items, '[]'::json) AS items
    FROM commandes c
    LEFT JOIN LATERAL (
      SELECT json_agg(json_build_object(
        'name', p.nom,
        'quantity', l.quantite,
        'price', COALESCE(l.prix_unitaire, p.prix),
        'notes', l.notes
      )) AS items
      FROM lignes_commande l
      JOIN produits p ON p.id = l.produit_id
      WHERE l.commande_id = c.id
    ) order_items ON TRUE
    ORDER BY c.date DESC
  `;
}

export async function createOrder(input: OrderCreateInput) {
  const rows = await getDb().query(
    `WITH requested_items AS (
       SELECT item.produit_id, item.quantite, item.notes
       FROM jsonb_to_recordset($3::jsonb)
         AS item(produit_id integer, quantite integer, notes text)
     ),
     priced_items AS (
       SELECT requested_items.produit_id,
              requested_items.quantite,
              requested_items.notes,
              p.prix
       FROM requested_items
       JOIN produits p ON p.id = requested_items.produit_id
     ),
     new_order AS (
       INSERT INTO commandes (nom_utilisateur, telephone, statut, total, date)
       SELECT $1::varchar, $2::varchar, 'en_attente',
              ROUND(SUM(priced_items.prix * priced_items.quantite) * 1.07, 2), NOW()
       FROM priced_items
       HAVING COUNT(*) = $4
       RETURNING *
     ),
     inserted_items AS (
       INSERT INTO lignes_commande
         (commande_id, produit_id, quantite, prix_unitaire, notes)
       SELECT new_order.id, priced_items.produit_id, priced_items.quantite,
              priced_items.prix, priced_items.notes
       FROM new_order
       CROSS JOIN priced_items
       RETURNING commande_id
     )
     SELECT * FROM new_order`,
    [
      input.nom_utilisateur,
      input.telephone?.trim() || null,
      JSON.stringify(input.items),
      input.items.length,
    ],
  );

  if (!rows[0]) {
    throw new Error("One or more products do not exist");
  }
  return rows[0];
}

export async function updateOrderStatus(id: string, statut: OrderStatus) {
  const rows = await getDb()`
    UPDATE commandes SET statut = ${statut} WHERE id = ${id} RETURNING *
  `;
  return rows[0] ?? null;
}