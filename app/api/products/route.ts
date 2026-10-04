import { type NextRequest } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, {
    ssl: "require",
});

export async function GET() {
    try {
        const produits = await sql`SELECT * FROM produits`;
        return new Response(JSON.stringify(produits), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching produits:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch produits" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, image } = await request.json();
        const updatedProduit = await sql`
            UPDATE produits
            SET image = ${image}
            WHERE id = ${id}
        `;
        return new Response(JSON.stringify(updatedProduit), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error updating produit:", error);
        return new Response(JSON.stringify({ error: "Failed to update produit" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        await sql`
            DELETE FROM produits
            WHERE id = ${id}
        `;
        return new Response(JSON.stringify({ message: "Produit deleted successfully" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting produit:", error);
        return new Response(JSON.stringify({ error: "Failed to delete produit" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}