// app/admin/produits/page.tsx
"use client";

import { useEffect, useState } from "react";
import {
  createProductAction,
  deleteProductAction,
  listCategoriesAction,
  listProductsAction,
  updateProductAction,
} from "@/lib/actions/products";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Package,
  AlertCircle,
  CheckCircle,
  XCircle,
  Image as ImageIcon,
  Download,
} from "lucide-react";

// Types
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
  image: string;
  description: string;
  categoryId?: number;
}

type Category = { id: number; nom: string };

// Données fictives
// const initialProducts: Product[] = [
//   {
//     id: "1",
//     name: "Espresso Classique",
//     category: "Cafés chauds",
//     price: 3.5,
//     stock: 45,
//     status: "active",
//     image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=100&h=100&fit=crop",
//     description: "Un espresso intense et corsé, 100% arabica bio",
//   },
//   {
//     id: "2",
//     name: "Latte Macchiato",
//     category: "Cafés chauds",
//     price: 4.5,
//     stock: 32,
//     status: "active",
//     image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=100&h=100&fit=crop",
//     description: "Lait vapeur, espresso et mousse de lait crémeuse",
//   },
//   {
//     id: "3",
//     name: "Smoothie Tropical",
//     category: "Boissons froides",
//     price: 5.5,
//     stock: 18,
//     status: "active",
//     image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=100&h=100&fit=crop",
//     description: "Mangue, ananas et fruits de la passion, sans sucre ajouté",
//   },
//   {
//     id: "4",
//     name: "Pain au chocolat",
//     category: "Pâtisseries",
//     price: 2.2,
//     stock: 0,
//     status: "inactive",
//     image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100&h=100&fit=crop",
//     description: "Viennoiserie pur beurre, croustillante et dorée",
//   },
//   {
//     id: "5",
//     name: "Cappuccino",
//     category: "Cafés chauds",
//     price: 4.2,
//     stock: 27,
//     status: "active",
//     image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=100&h=100&fit=crop",
//     description: "Café, lait chaud et mousse de lait, saupoudré de cacao",
//   },
// ];

const categories = ["Tous", "Cafés chauds", "Boissons froides", "Pâtisseries", "Thés", "Autres"];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoriesFromDb, setCategoriesFromDb] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const loadProducts = async () => {
    setIsLoading(true);
    const [productsResult, categoriesResult] = await Promise.all([
      listProductsAction(),
      listCategoriesAction(),
    ]);
    if (productsResult.success) {
      setProducts(productsResult.data.map((product) => ({
        id: String(product.id),
        name: product.nom,
        category: product.categorie_nom ?? String(product.categorie_id),
        categoryId: Number(product.categorie_id),
        price: Number(product.prix),
        stock: Number(product.quantite),
        status: product.actif === false ? "inactive" : "active",
        image: product.image ?? "",
        description: product.description ?? "",
      })));
    } else {
      setError(productsResult.error);
    }
    if (categoriesResult.success) {
      setCategoriesFromDb(categoriesResult.data.map((category) => ({
        id: Number(category.id),
        nom: String(category.nom),
      })));
    }
    setIsLoading(false);
  };

  console.log(products);

  useEffect(() => {
    void loadProducts();
  }, []);

  // Filtrage
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Statistiques
  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "active").length;
  const lowStock = products.filter((p) => p.stock < 5 && p.stock > 0).length;
  const outOfStock = products.filter((p) => p.stock === 0).length;

  // Handlers
  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      category: categoriesFromDb[0]?.nom ?? "",
      categoryId: categoriesFromDb[0]?.id,
      price: 0,
      stock: 0,
      status: "active",
      image: "",
      description: "",
    });
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      void deleteProductAction({ id: Number(id) }).then((result) => {
        if (result.success) void loadProducts();
        else setError(typeof result.error === "string" ? result.error : "Données invalides");
      });
    }
  };

  const handleSaveProduct = async () => {
    const input = {
      nom: formData.name,
      quantite: formData.stock,
      prix: formData.price,
      categorie_id: formData.categoryId ?? categoriesFromDb.find((category) => category.nom === formData.category)?.id,
      image: formData.image,
    };
    const result = editingProduct
      ? await updateProductAction({ ...input, id: Number(editingProduct.id) })
      : await createProductAction(input);
    if (result.success) {
      setIsModalOpen(false);
      await loadProducts();
    } else {
      setError(typeof result.error === "string" ? result.error : "Vérifiez les champs du produit");
    }
  };

  const toggleSelectProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedProducts.length === paginatedProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(paginatedProducts.map((p) => p.id));
    }
  };

  const toggleStatus = (id: string) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "active" ? "inactive" : "active" }
          : p
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-amber-50/30">
      <div className="flex-1 p-8">
      {error && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-red-700">{error}</p>}
      {isLoading && <p className="mb-4 text-gray-500">Chargement des produits...</p>}
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">Gestion des produits</h1>
            <p className="text-gray-600 mt-1">Gérez votre catalogue de produits</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={handleAddProduct}
              className="bg-[#3C2A21] hover:bg-[#5C3B2A] text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
            >
              <Plus className="h-5 w-5" />
              Ajouter un produit
            </button>
            <button className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition">
              <Download className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total produits</p>
                <p className="text-2xl font-bold text-[#3C2A21]">{totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-[#3C2A21] opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Actifs</p>
                <p className="text-2xl font-bold text-green-600">{activeProducts}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600 opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Stock faible</p>
                <p className="text-2xl font-bold text-yellow-600">{lowStock}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600 opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rupture de stock</p>
                <p className="text-2xl font-bold text-red-600">{outOfStock}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600 opacity-50" />
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? "bg-[#3C2A21] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tableau des produits */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-10 px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === paginatedProducts.length && paginatedProducts.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded border-gray-300 text-[#3C2A21] focus:ring-[#3C2A21]"
                    />
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Produit</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Catégorie</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Prix</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Stock</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Statut</th>
                  <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-amber-50/50 transition">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleSelectProduct(product.id)}
                        className="rounded border-gray-300 text-[#3C2A21] focus:ring-[#3C2A21]"
                      />
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <ImageIcon className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-[#3C2A21]">{product.name}</p>
                          <p className="text-xs text-gray-400 truncate max-w-[150px]">{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-600">{product.category}</td>
                    <td className="py-3 font-medium text-[#3C2A21]">{product.price.toFixed(2)} €</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.stock === 0
                            ? "bg-red-100 text-red-700"
                            : product.stock < 5
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {product.stock} unités
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => toggleStatus(product.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                          product.status === "active"
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {product.status === "active" ? "Actif" : "Inactif"}
                      </button>
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                {filteredProducts.length} produit(s) · Page {currentPage} sur {totalPages}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50 transition"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50 transition"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Actions en masse */}
        {selectedProducts.length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#3C2A21] text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-4 z-50">
            <span className="text-sm">{selectedProducts.length} produit(s) sélectionné(s)</span>
            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition">
              Activer
            </button>
            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition">
              Désactiver
            </button>
            <button className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition">
              Supprimer
            </button>
          </div>
        )}

        {/* Modal Ajout/Édition */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-serif font-bold text-[#3C2A21] mb-6">
                {editingProduct ? "Modifier le produit" : "Ajouter un produit"}
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveProduct();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input
                    type="text"
                    required
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie *</label>
                  <select
                    required
                    value={formData.category || "Cafés chauds"}
                    onChange={(e) => {
                      const category = categoriesFromDb.find((item) => item.nom === e.target.value);
                      setFormData({ ...formData, category: e.target.value, categoryId: category?.id });
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                  >
                    {(categoriesFromDb.length ? categoriesFromDb.map((category) => category.nom) : categories.filter(c => c !== "Tous")).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€) *</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      min="0"
                      value={formData.price || 0}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock *</label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.stock || 0}
                      onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL de l&apos;image</label>
                  <input
                    type="url"
                    value={formData.image || ""}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://exemple.com/image.jpg"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description || ""}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                  <select
                    value={formData.status || "active"}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "inactive" })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none"
                  >
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#3C2A21] hover:bg-[#5C3B2A] text-white transition"
                  >
                    {editingProduct ? "Mettre à jour" : "Ajouter"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}