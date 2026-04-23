"use client";

import { useState, useEffect } from "react"
import type { Produits } from "@/lib/data";

export default function Produits() {
    const [products, setProducts] = useState<Produits[]>([])

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch("/api/products")
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchproducts();
    }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Produits</h1>
            <p>Gestion des produits</p>
            {products.map((product) => (
                <table key={product.id}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    )
}