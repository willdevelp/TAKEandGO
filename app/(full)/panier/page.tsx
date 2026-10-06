// app/panier/page.tsx
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../context/Cartcontext";
import { createOrderAction } from "@/lib/actions/orders";

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(amount);

export default function PanierPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } =
    useCart();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [completedOrderId, setCompletedOrderId] = useState("");

  const tax = +(subtotal * 0.07).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await createOrderAction({
        nom_utilisateur: customerName,
        telephone: phone.trim() || null,
        items: cart.map(({ coffee, quantity }) => ({
          produit_id: coffee.id,
          quantite: quantity,
        })),
      });

      if (!result.success) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Bitte überprüfen Sie Ihre Bestellangaben.",
        );
        return;
      }

      setCompletedOrderId(String(result.data.id));
      clearCart();
    } catch {
      setError("Beim Erstellen der Bestellung ist ein Fehler aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50/30 px-4">
        {completedOrderId ? (
          <>
            <ShoppingBag className="mb-6 h-24 w-24 text-green-600" />
            <h1 className="mb-3 text-center text-3xl font-serif font-bold text-[#3C2A21]">
              Bestellung bestätigt
            </h1>
            <p role="status" className="mb-2 text-center text-gray-600">
              Ihre Bestellung Nr. {completedOrderId} wurde erfolgreich aufgenommen.
            </p>
          </>
        ) : (
          <>
            <ShoppingBag className="mb-6 h-24 w-24 text-[#3C2A21]/30" />
            <h1 className="mb-3 text-3xl font-serif font-bold text-[#3C2A21]">
              Ihr Warenkorb ist leer
            </h1>
            <p className="mb-8 text-gray-500">
              Entdecken Sie unsere Speisekarte und legen Sie Ihre Lieblingsgetränke in den Warenkorb.
            </p>
          </>
        )}
        <Link
          href="/carte"
          className="bg-[#3C2A21] hover:bg-[#5C3B2A] text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          Zurück zur Speisekarte
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/30 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">
            Mein Warenkorb
          </h1>
          <div className="text-sm text-gray-500">{totalItems} Artikel</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.coffee.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-md transition"
              >
                <Image
                  src={item.coffee.image}
                  alt={item.coffee.nom}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover w-20 h-20 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#3C2A21]">
                    {item.coffee.nom}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {item.coffee.description}
                  </p>
                  <p className="text-lg font-bold text-[#D4A574] mt-1">
                    {formatPrice(item.coffee.prix)}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        updateQuantity(item.coffee.id, item.quantity - 1)
                      }
                      aria-label="Menge verringern"
                      className="px-3 py-2 hover:bg-gray-50 transition"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="w-10 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.coffee.id, item.quantity + 1)
                      }
                      aria-label="Menge erhöhen"
                      className="px-3 py-2 hover:bg-gray-50 transition"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.coffee.id)}
                    aria-label={`${item.coffee.nom} entfernen`}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-700 transition font-medium"
            >
              Warenkorb leeren
            </button>
          </div>

          {/* Résumé */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-[#3C2A21] mb-6">
                Bestellübersicht
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Zwischensumme</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Steuern (7 %)</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Gesamt</span>
                    <span className="text-[#3C2A21]">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="mt-6 space-y-3">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Name *
                  </label>
                  <input
                    id="customer-name"
                    name="customerName"
                    type="text"
                    autoComplete="name"
                    maxLength={160}
                    required
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customer-phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Telefonnummer (optional)
                  </label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21]"
                  />
                </div>
                {error && (
                  <p role="alert" className="text-sm text-red-700">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#3C2A21] py-3 font-semibold text-white transition hover:bg-[#5C3B2A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Bestellung wird erstellt ..." : "Jetzt bestellen"}
                </button>
              </form>

              <Link
                href="/carte"
                className="block text-center mt-4 text-sm text-[#D4A574] hover:underline"
              >
                <ArrowLeft className="inline h-4 w-4 mr-1" />
                Weiter einkaufen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}