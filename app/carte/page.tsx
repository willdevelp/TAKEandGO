// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// type Coffee = {
//     id: string;
//     name: string;
//     description?: string;
//     price: number;
//     image?: string;
// };

// type CartItem = {
//     coffee: Coffee;
//     quantity: number;
// };

// const SAMPLE_COFFEES: Coffee[] = [
//     {
//         id: "espresso",
//         name: "Espresso",
//         description: "Strong and bold, served in a small cup.",
//         price: 2.5,
//         image: "/caffe.jpg",
//     },
//     {
//         id: "latte",
//         name: "Caffè Latte",
//         description: "Espresso with steamed milk and a little foam.",
//         price: 3.75,
//         image: "/caffee.jpg",
//     },
//     {
//         id: "cappuccino",
//         name: "Cappuccino",
//         description: "Equal parts espresso, steamed milk, and foam.",
//         price: 3.5,
//         image: "/capuccino.jpg",
//     },
// ];

// const STORAGE_KEY = "takeandgo_coffee_cart_v1";

// function loadCart(): CartItem[] {
//     try {
//         const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
//         if (!raw) return [];
//         const parsed = JSON.parse(raw) as CartItem[];
//         return parsed;
//     } catch {
//         return [];
//     }
// }

// function saveCart(cart: CartItem[]) {
//     try {
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
//     } catch {
//         // ignore
//     }
// }

// export default function Page() {
//     const [coffees] = useState<Coffee[]>(SAMPLE_COFFEES);
//     const [cart, setCart] = useState<CartItem[]>(() => {
//         if (typeof window === "undefined") return [];
//         return loadCart();
//     });

//     useEffect(() => {
//         saveCart(cart);
//     }, [cart]);

//     function addToCart(coffee: Coffee, qty = 1) {
//         setCart((prev) => {
//             const idx = prev.findIndex((p) => p.coffee.id === coffee.id);
//             if (idx >= 0) {
//                 const next = [...prev];
//                 next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
//                 return next;
//             }
//             return [...prev, { coffee, quantity: qty }];
//         });
//     }

//     function updateQuantity(id: string, quantity: number) {
//         setCart((prev) =>
//             prev
//                 .map((it) => (it.coffee.id === id ? { ...it, quantity: Math.max(0, Math.floor(quantity)) } : it))
//                 .filter((it) => it.quantity > 0)
//         );
//     }

//     function removeItem(id: string) {
//         setCart((prev) => prev.filter((it) => it.coffee.id !== id));
//     }

//     function clearCart() {
//         setCart([]);
//     }

//     const subtotal = cart.reduce((s, it) => s + it.coffee.price * it.quantity, 0);
//     const tax = +(subtotal * 0.07).toFixed(2);
//     const total = +(subtotal + tax).toFixed(2);

//     return (
//         <div style={{ padding: 20, fontFamily: "Inter, system-ui, Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//             <h1 style={{ marginBottom: 20, textAlign: "center", color: "#333" }}>Coffee Cart</h1>
//             <div style={{ display: "flex", gap: 24, alignItems: "flex-start", maxWidth: "1200px", margin: "0 auto" }}>
//                 <div style={{ flex: 1 }}>
//                     <h2 style={{ marginTop: 0, color: "#555" }}>Menu</h2>
//                     <div style={{ display: "grid", gap: 16 }}>
//                         {coffees.map((c) => (
//                             <div
//                                 key={c.id}
//                                 style={{
//                                     display: "flex",
//                                     gap: 16,
//                                     padding: 16,
//                                     border: "1px solid #e0e0e0",
//                                     borderRadius: 12,
//                                     alignItems: "center",
//                                     backgroundColor: "white",
//                                     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                                 }}
//                             >
//                                 <Image
//                                     src={c.image || ""}
//                                     alt={c.name}
//                                     width={96}
//                                     height={64}
//                                     style={{ borderRadius: 8, objectFit: "cover" }}
//                                 />
//                                 <div style={{ flex: 1 }}>
//                                     <div style={{ fontWeight: 600, fontSize: 18 }}>{c.name}</div>
//                                     <div style={{ fontSize: 14, color: "#666", marginTop: 4 }}>{c.description}</div>
//                                     <div style={{ marginTop: 8, fontWeight: 700, fontSize: 16, color: "#2d3748" }}>${c.price.toFixed(2)}</div>
//                                 </div>
//                                 <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//                                     <button
//                                         onClick={() => addToCart(c, 1)}
//                                         style={{
//                                             padding: "10px 16px",
//                                             background: "#3182ce",
//                                             color: "white",
//                                             border: "none",
//                                             borderRadius: 8,
//                                             cursor: "pointer",
//                                             fontWeight: 600,
//                                         }}
//                                     >
//                                         Add
//                                     </button>
//                                     <button
//                                         onClick={() => addToCart(c, 3)}
//                                         style={{
//                                             padding: "8px 14px",
//                                             background: "#edf2f7",
//                                             border: "1px solid #cbd5e0",
//                                             borderRadius: 8,
//                                             cursor: "pointer",
//                                             fontSize: 14,
//                                             color: "#4a5568",
//                                         }}
//                                     >
//                                         Add 3
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <aside style={{ width: 380 }}>
//                     <div
//                         style={{
//                             padding: 20,
//                             border: "1px solid #e0e0e0",
//                             borderRadius: 12,
//                             background: "white",
//                             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                         }}
//                     >
//                         <h2 style={{ marginTop: 0, color: "#555" }}>Your Cart</h2>
//                         {cart.length === 0 ? (
//                             <div style={{ color: "#888", textAlign: "center", padding: 20 }}>Your cart is empty.</div>
//                         ) : (
//                             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                                 {cart.map((it) => (
//                                     <div
//                                         key={it.coffee.id}
//                                         style={{
//                                             display: "flex",
//                                             gap: 12,
//                                             alignItems: "center",
//                                             padding: 12,
//                                             borderRadius: 8,
//                                             background: "#f7fafc",
//                                             border: "1px solid #e2e8f0",
//                                         }}
//                                     >
//                                         <Image
//                                             src={it.coffee.image || ""}
//                                             alt={it.coffee.name}
//                                             width={64}
//                                             height={44}
//                                             style={{ borderRadius: 6, objectFit: "cover" }}
//                                         />
//                                         <div style={{ flex: 1 }}>
//                                             <div style={{ fontWeight: 600 }}>{it.coffee.name}</div>
//                                             <div style={{ fontSize: 13, color: "#666" }}>
//                                                 ${it.coffee.price.toFixed(2)} each
//                                             </div>
//                                         </div>
//                                         <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                                             <button
//                                                 onClick={() => updateQuantity(it.coffee.id, it.quantity - 1)}
//                                                 style={{
//                                                     padding: "6px 8px",
//                                                     borderRadius: 6,
//                                                     border: "1px solid #cbd5e0",
//                                                     background: "#fff",
//                                                     cursor: "pointer",
//                                                 }}
//                                             >
//                                                 −
//                                             </button>
//                                             <input
//                                                 type="number"
//                                                 min={1}
//                                                 value={it.quantity}
//                                                 onChange={(e) => updateQuantity(it.coffee.id, Number(e.target.value || 0))}
//                                                 style={{ width: 50, textAlign: "center", padding: 6, borderRadius: 6, border: "1px solid #cbd5e0" }}
//                                             />
//                                             <button
//                                                 onClick={() => updateQuantity(it.coffee.id, it.quantity + 1)}
//                                                 style={{
//                                                     padding: "6px 8px",
//                                                     borderRadius: 6,
//                                                     border: "1px solid #cbd5e0",
//                                                     background: "#fff",
//                                                     cursor: "pointer",
//                                                 }}
//                                             >
//                                                 +
//                                             </button>
//                                             <button
//                                                 onClick={() => removeItem(it.coffee.id)}
//                                                 title="Remove"
//                                                 style={{
//                                                     padding: "6px 8px",
//                                                     marginLeft: 8,
//                                                     borderRadius: 6,
//                                                     border: "1px solid #fed7d7",
//                                                     background: "#fff",
//                                                     color: "#e53e3e",
//                                                     cursor: "pointer",
//                                                 }}
//                                             >
//                                                 ×
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <div style={{ borderTop: "1px dashed #cbd5e0", paddingTop: 12 }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
//                                         <div>Subtotal</div>
//                                         <div>${subtotal.toFixed(2)}</div>
//                                     </div>
//                                     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
//                                         <div>Tax (7%)</div>
//                                         <div>${tax.toFixed(2)}</div>
//                                     </div>
//                                     <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, marginTop: 8, fontSize: 18 }}>
//                                         <div>Total</div>
//                                         <div>${total.toFixed(2)}</div>
//                                     </div>
//                                     <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
//                                         <button
//                                             onClick={() => alert(`Checkout not implemented. Total: $${total.toFixed(2)}`)}
//                                             style={{
//                                                 flex: 1,
//                                                 padding: "12px 16px",
//                                                 background: "#2d3748",
//                                                 color: "white",
//                                                 border: "none",
//                                                 borderRadius: 8,
//                                                 cursor: "pointer",
//                                                 fontWeight: 600,
//                                             }}
//                                         >
//                                             Checkout
//                                         </button>
//                                         <button
//                                             onClick={clearCart}
//                                             style={{
//                                                 padding: "12px 16px",
//                                                 background: "#fff",
//                                                 border: "1px solid #cbd5e0",
//                                                 borderRadius: 8,
//                                                 cursor: "pointer",
//                                                 color: "#4a5568",
//                                             }}
//                                         >
//                                             Clear
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </aside>
//             </div>
//         </div>
//     );
// }


"use client"

import { useState } from "react"
import { FaCoffee } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { FaStar } from "react-icons/fa"


export default function CartePage() {

    const categories = ["Tous", "chaude", "sans-alcool", "cremeux"]

const produits = [
      {
        id: 1,
        nom: 'Espresso Classique',
        image: '/caffee.jpg',
        description: 'Un espresso intense et corsé',
        prix: 3.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 2,
        nom: 'Latte Macchiato',
        image: '/creme.jpg',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 3,
        image: '/capuccino.jpg',
        nom: 'Smoothie Tropical',
        description: 'Mangue, ananas et fruits de la passion',
        prix: 5.50,
        categorie: 'sans-alcool',
        populaire: true
      },
       {
        id: 4,
        nom: 'Espresso Classique',
        image: '/caffee.jpg',
        description: 'Un espresso intense et corsé',
        prix: 3.50,
        categorie: 'cremeux',
        populaire: true
      },
      {
        id: 5,
        nom: 'Latte Macchiato',
        image: '/creme.jpg',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 6,
        image: '/capuccino.jpg',
        nom: 'Smoothie Tropical',
        description: 'Mangue, ananas et fruits de la passion',
        prix: 5.50,
        categorie: 'sans-alcool',
        populaire: true
      },
            {
        id: 7,
        nom: 'Latte Macchiato',
        image: '/creme.jpg',
        description: 'Lait vapeur, espresso et mousse de lait crémeuse',
        prix: 4.50,
        categorie: 'chaude',
        populaire: true
      },
      {
        id: 8,
        image: '/capuccino.jpg',
        nom: 'Smoothie Tropical',
        description: 'Mangue, ananas et fruits de la passion',
        prix: 5.50,
        categorie: 'sans-alcool',
        populaire: true
      }
    ];
  const [active, setActive] = useState("Tous")

  const filtered =
    active === "Tous"
      ? produits
      : produits.filter((p) => p.categorie === active)

  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-[#3C2A21] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Notre Carte
        </h1>
        <p className="text-gray-300">
          Découvrez nos spécialités soigneusement préparées
        </p>
      </section>

      {/* FILTRES */}
      <div className="mx-auto flex justify-center space-x-10 flex-wrap py-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              active === cat
                ? "bg-[#3C2A21] text-white"
                : "bg-white text-[#3C2A21] border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUITS */}
      <div className="container-custom grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 px-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
           <div className="">
                  <div>
                    <Image
                    src={item.image}
                    alt={item.nom}
                    width={300}
                    height={200}
                    className='object-cover w-full h-72 rounded-t-lg transition-transform duration-500 hover:scale-105'
                    />
                  </div>
                  <div className='p-6'>
                    <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[#3C2A21]">{item.nom}</h3>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-[#D4A574]" />
                      <span className="text-lg font-bold text-[#D4A574]">{item.prix}€</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 h-12">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      Populaire
                    </span>
                    <Link 
                      href="/commande" 
                      className="bg-[#D4A574] hover:bg-[#B8865B] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
                  </div>
          </div>
        ))}
      </div>
    </div>
  )
}

