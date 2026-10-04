"use server";

import { createOrder, listOrders, updateOrderStatus } from "@/lib/queries/orders";
import { orderCreateSchema, orderStatusUpdateSchema } from "@/lib/schema/order";

export async function listOrdersAction() {
  try {
    return { success: true as const, data: await listOrders() };
  } catch {
    return { success: false as const, error: "Impossible de charger les commandes" };
  }
}

export async function createOrderAction(input: unknown) {
  const parsed = orderCreateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return { success: true as const, data: await createOrder(parsed.data) };
  } catch {
    return { success: false as const, error: "Impossible de créer la commande" };
  }
}

export async function updateOrderStatusAction(input: unknown) {
  const parsed = orderStatusUpdateSchema.safeParse(input);
  if (!parsed.success) return { success: false as const, error: parsed.error.flatten() };

  try {
    return {
      success: true as const,
      data: await updateOrderStatus(parsed.data.id, parsed.data.statut),
    };
  } catch {
    return { success: false as const, error: "Impossible de modifier la commande" };
  }
}