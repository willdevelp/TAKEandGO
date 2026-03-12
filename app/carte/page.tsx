"use client";

import React, { useEffect, useState } from "react";

type Coffee = {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
};

type CartItem = {
    coffee: Coffee;
    quantity: number;
};

const SAMPLE_COFFEES: Coffee[] = [
    {
        id: "espresso",
        name: "Espresso",
        description: "Strong and bold, served in a small cup.",
        price: 2.5,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=60&auto=format&fit=crop",
    },
    {
        id: "latte",
        name: "Caffè Latte",
        description: "Espresso with steamed milk and a little foam.",
        price: 3.75,
        image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=800&q=60&auto=format&fit=crop",
    },
    {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and foam.",
        price: 3.5,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=60&auto=format&fit=crop",
    },
];

const STORAGE_KEY = "takeandgo_coffee_cart_v1";

function loadCart(): CartItem[] {
    try {
        const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
        if (!raw) return [];
        const parsed = JSON.parse(raw) as CartItem[];
        return parsed;
    } catch {
        return [];
    }
}

function saveCart(cart: CartItem[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
        // ignore
    }
}

export default function Page() {
    const [coffees] = useState<Coffee[]>(SAMPLE_COFFEES);
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window === "undefined") return [];
        return loadCart();
    });

    useEffect(() => {
        saveCart(cart);
    }, [cart]);

    function addToCart(coffee: Coffee, qty = 1) {
        setCart((prev) => {
            const idx = prev.findIndex((p) => p.coffee.id === coffee.id);
            if (idx >= 0) {
                const next = [...prev];
                next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
                return next;
            }
            return [...prev, { coffee, quantity: qty }];
        });
    }

    function updateQuantity(id: string, quantity: number) {
        setCart((prev) =>
            prev
                .map((it) => (it.coffee.id === id ? { ...it, quantity: Math.max(0, Math.floor(quantity)) } : it))
                .filter((it) => it.quantity > 0)
        );
    }

    function removeItem(id: string) {
        setCart((prev) => prev.filter((it) => it.coffee.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    const subtotal = cart.reduce((s, it) => s + it.coffee.price * it.quantity, 0);
    const tax = +(subtotal * 0.07).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    return (
        <div style={{ padding: 20, fontFamily: "Inter, system-ui, Arial, sans-serif" }}>
            <h1 style={{ marginBottom: 8 }}>Coffee Cart</h1>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginTop: 0 }}>Menu</h2>
                    <div style={{ display: "grid", gap: 12 }}>
                        {coffees.map((c) => (
                            <div
                                key={c.id}
                                style={{
                                    display: "flex",
                                    gap: 12,
                                    padding: 12,
                                    border: "1px solid #e6e6e6",
                                    borderRadius: 8,
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={c.image}
                                    alt={c.name}
                                    style={{ width: 96, height: 64, objectFit: "cover", borderRadius: 6 }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                                    <div style={{ fontSize: 13, color: "#555" }}>{c.description}</div>
                                    <div style={{ marginTop: 6, fontWeight: 700 }}>${c.price.toFixed(2)}</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                    <button
                                        onClick={() => addToCart(c, 1)}
                                        style={{
                                            padding: "8px 12px",
                                            background: "#111827",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 6,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Add
                                    </button>
                                    <button
                                        onClick={() => addToCart(c, 3)}
                                        style={{
                                            padding: "6px 10px",
                                            background: "#efefef",
                                            border: "1px solid #ddd",
                                            borderRadius: 6,
                                            cursor: "pointer",
                                            fontSize: 13,
                                        }}
                                    >
                                        Add 3
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside style={{ width: 360 }}>
                    <div
                        style={{
                            padding: 16,
                            border: "1px solid #e6e6e6",
                            borderRadius: 8,
                            background: "#fafafa",
                        }}
                    >
                        <h2 style={{ marginTop: 0 }}>Your Cart</h2>
                        {cart.length === 0 ? (
                            <div style={{ color: "#666" }}>Your cart is empty.</div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {cart.map((it) => (
                                    <div
                                        key={it.coffee.id}
                                        style={{
                                            display: "flex",
                                            gap: 10,
                                            alignItems: "center",
                                            padding: 8,
                                            borderRadius: 6,
                                            background: "white",
                                        }}
                                    >
                                        <img
                                            src={it.coffee.image}
                                            alt={it.coffee.name}
                                            style={{ width: 64, height: 44, objectFit: "cover", borderRadius: 6 }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600 }}>{it.coffee.name}</div>
                                            <div style={{ fontSize: 13, color: "#555" }}>
                                                ${it.coffee.price.toFixed(2)} each
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <button
                                                onClick={() => updateQuantity(it.coffee.id, it.quantity - 1)}
                                                style={{
                                                    padding: "6px 8px",
                                                    borderRadius: 6,
                                                    border: "1px solid #ddd",
                                                    background: "#fff",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                min={1}
                                                value={it.quantity}
                                                onChange={(e) => updateQuantity(it.coffee.id, Number(e.target.value || 0))}
                                                style={{ width: 44, textAlign: "center", padding: 6, borderRadius: 6, border: "1px solid #ddd" }}
                                            />
                                            <button
                                                onClick={() => updateQuantity(it.coffee.id, it.quantity + 1)}
                                                style={{
                                                    padding: "6px 8px",
                                                    borderRadius: 6,
                                                    border: "1px solid #ddd",
                                                    background: "#fff",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeItem(it.coffee.id)}
                                                title="Remove"
                                                style={{
                                                    padding: "6px 8px",
                                                    marginLeft: 8,
                                                    borderRadius: 6,
                                                    border: "1px solid #ffdddd",
                                                    background: "#fff",
                                                    color: "#c00",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ borderTop: "1px dashed #e6e6e6", paddingTop: 10 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Subtotal</div>
                                        <div>${subtotal.toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Tax (7%)</div>
                                        <div>${tax.toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, marginTop: 8 }}>
                                        <div>Total</div>
                                        <div>${total.toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                                        <button
                                            onClick={() => alert(`Checkout not implemented. Total: $${total.toFixed(2)}`)}
                                            style={{
                                                flex: 1,
                                                padding: "10px 12px",
                                                background: "#0f172a",
                                                color: "white",
                                                border: "none",
                                                borderRadius: 6,
                                                cursor: "pointer",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Checkout
                                        </button>
                                        <button
                                            onClick={clearCart}
                                            style={{
                                                padding: "10px 12px",
                                                background: "#fff",
                                                border: "1px solid #ddd",
                                                borderRadius: 6,
                                                cursor: "pointer",
                                            }}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}