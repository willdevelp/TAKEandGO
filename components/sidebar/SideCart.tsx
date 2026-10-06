// app/components/SideCart.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/app/(full)/context/Cartcontext";

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const formatPrice = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);

export default function SideCart({ isOpen, onClose }: SideCartProps) {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } =
    useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      const t = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  /* Fermeture avec Échap */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const tax = +(subtotal * 0.07).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  /* Ne monte le drawer que lorsqu'il a déjà été ouvert au moins une fois */
  if (!isOpen && !isVisible) return null;

  return (
    <>
      {/* ============ OVERLAY ============ */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-[#1F140E]/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* ============ DRAWER ============ */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Warenkorb"
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#FDFBF8] shadow-[0_30px_80px_-30px_rgba(60,42,33,0.7)] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[440px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ---------- EN-TÊTE ---------- */}
        <header className="relative overflow-hidden bg-[#3C2A21] px-6 py-5 text-white">
          {/* Halos décoratifs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#B8865B]/15 blur-3xl" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <ShoppingBag className="h-4.5 w-4.5 text-[#D4A574]" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="font-serif text-lg font-bold leading-tight">Mein Warenkorb</h2>
                <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                  {totalItems === 0
                    ? "Keine Artikel"
                    : `${totalItems} Artikel`}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Warenkorb schließen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A574] hover:bg-[#D4A574] hover:text-[#3C2A21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* ---------- CONTENU ---------- */}
        <div className="relative flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            /* ===== PANIER VIDE ===== */
            <div className="flex h-full flex-col items-center justify-center px-8 py-14 text-center">
              {/* Icône décorée */}
              <div className="relative">
                <span className="absolute inset-0 -m-4 rounded-full bg-[#F0E6D2]/60 blur-2xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] shadow-[0_20px_40px_-22px_rgba(60,42,33,0.6)]">
                  <ShoppingBag className="h-8 w-8 text-[#3C2A21]/60" strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="mt-8 font-serif text-2xl font-bold leading-tight">
                Ihr Warenkorb ist <span className="italic text-[#B8865B]">leer</span>
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#3C2A21]/55">
                Fügen Sie Ihre Lieblingsgetränke aus der Speisekarte hinzu, um sie hier zu sehen.
              </p>

              <Link
                href="/carte"
                onClick={onClose}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#3C2A21] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(60,42,33,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
              >
                Speisekarte entdecken
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <p className="mt-8 flex items-center gap-1.5 text-xs text-[#3C2A21]/45">
                <Sparkles className="h-3.5 w-3.5 text-[#B8865B]" />
                Hausgeröstet und frisch auf Bestellung zubereitet
              </p>
            </div>
          ) : (
            /* ===== LISTE DES ARTICLES ===== */
            <ul className="divide-y divide-[#3C2A21]/8">
              {cart.map((item) => (
                <li
                  key={item.coffee.id}
                  className="group flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[#FBF9F6]"
                >
                  {/* Image */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#F0E6D2]/40">
                    <Image
                      src={item.coffee.image}
                      alt={item.coffee.nom}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>

                  {/* Infos */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="truncate font-serif text-[15px] font-bold leading-snug">
                        {item.coffee.nom}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.coffee.id)}
                        aria-label={`${item.coffee.nom} entfernen`}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#3C2A21]/35 transition-colors hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <p className="mt-0.5 line-clamp-1 text-xs text-[#3C2A21]/50">
                      {item.coffee.description}
                    </p>

                    <p className="mt-1.5 text-xs font-semibold tabular-nums text-[#B8865B]">
                      {formatPrice(item.coffee.prix)} pro Stück
                    </p>

                    {/* Quantité + Total ligne */}
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center overflow-hidden rounded-full border border-[#3C2A21]/15 bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(item.coffee.id, item.quantity - 1)
                          }
                          aria-label="Menge verringern"
                          className="flex h-8 w-8 items-center justify-center text-[#3C2A21]/60 transition-colors hover:bg-[#F0E6D2]/60 hover:text-[#3C2A21]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.coffee.id, item.quantity + 1)
                          }
                          aria-label="Menge erhöhen"
                          className="flex h-8 w-8 items-center justify-center text-[#3C2A21]/60 transition-colors hover:bg-[#F0E6D2]/60 hover:text-[#3C2A21]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <span className="font-serif text-base font-bold tabular-nums">
                        {formatPrice(item.coffee.prix * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}

              {/* Vider le panier */}
              {cart.length > 1 && (
                <li className="px-6 py-4">
                  <button
                    onClick={clearCart}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500 transition-colors hover:text-red-700"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Warenkorb leeren
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>

        {/* ---------- PIED / RÉSUMÉ ---------- */}
        {cart.length > 0 && (
          <footer className="border-t border-[#3C2A21]/10 bg-[#FBF9F6]">
            <div className="space-y-2.5 px-6 py-5 text-sm">
              <div className="flex justify-between">
                <span className="text-[#3C2A21]/60">
                  Zwischensumme ({totalItems})
                </span>
                <span className="font-semibold tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3C2A21]/60">Steuern (7 %)</span>
                <span className="font-semibold tabular-nums">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3C2A21]/60">Lieferung</span>
                <span className="font-semibold text-green-600">Kostenlos</span>
              </div>

              <div className="border-t border-dashed border-[#3C2A21]/15 pt-3">
                <div className="flex items-end justify-between">
                  <span className="font-serif text-base font-bold">Gesamt</span>
                  <span className="font-serif text-xl font-bold tabular-nums">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 px-6 pb-6">
              <Link
                href="/panier"
                onClick={onClose}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3C2A21] px-6 py-4 font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
              >
                Zur Kasse
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/panier"
                onClick={onClose}
                className="block text-center text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
              >
                Warenkorb ansehen
              </Link>

              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-[#3C2A21]/45">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  Sichere Zahlung
                </span>
                <span className="h-3 w-px bg-[#3C2A21]/15" />
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  Kostenlose Stornierung
                </span>
              </div>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
}