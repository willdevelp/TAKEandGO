// app/admin/commandes/page.tsx
"use client";

import { useEffect, useState } from "react";
import { listOrdersAction, updateOrderStatusAction } from "@/lib/actions/orders";
import {
  Search,
  Eye,
  MoreVertical,
  Download,
  RefreshCw,
  Clock,
  CheckCircle,
  XCircle,
  Package,
  User,
  Truck,
  Printer,
} from "lucide-react";

// Types
interface Order {
  id: string;
  customer: string;
  phone: string | null;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed" | "cancelled";
  paymentMethod: "card" | "cash" | "mobile";
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

// Données fictives
// const initialOrders: Order[] = [
//   {
//     id: "CMD-001",
//     customer: "Marie Dupont",
//     email: "marie@email.fr",
//     phone: "06 12 34 56 78",
//     items: [
//       { name: "Espresso Classique", quantity: 2, price: 3.5 },
//       { name: "Pain au chocolat", quantity: 1, price: 2.2 },
//     ],
//     total: 9.2,
//     status: "completed",
//     paymentMethod: "card",
//     createdAt: "2025-03-18T10:30:00",
//     updatedAt: "2025-03-18T10:45:00",
//   },
//   {
//     id: "CMD-002",
//     customer: "Jean Martin",
//     email: "jean@email.fr",
//     phone: "06 98 76 54 32",
//     items: [
//       { name: "Latte Macchiato", quantity: 1, price: 4.5 },
//       { name: "Smoothie Tropical", quantity: 1, price: 5.5 },
//     ],
//     total: 10.0,
//     status: "pending",
//     paymentMethod: "mobile",
//     createdAt: "2025-03-18T11:15:00",
//     updatedAt: "2025-03-18T11:15:00",
//     notes: "Sans sucre pour le latte",
//   },
//   {
//     id: "CMD-003",
//     customer: "Sophie Bernard",
//     email: "sophie@email.fr",
//     phone: "06 45 67 89 01",
//     items: [
//       { name: "Cappuccino", quantity: 3, price: 4.2 },
//       { name: "Muffin", quantity: 2, price: 3.0 },
//     ],
//     total: 18.6,
//     status: "preparing",
//     paymentMethod: "card",
//     createdAt: "2025-03-18T12:00:00",
//     updatedAt: "2025-03-18T12:20:00",
//   },
//   {
//     id: "CMD-004",
//     customer: "Pierre Dubois",
//     email: "pierre@email.fr",
//     phone: "06 23 45 67 89",
//     items: [{ name: "Thé vert", quantity: 1, price: 3.8 }],
//     total: 3.8,
//     status: "cancelled",
//     paymentMethod: "cash",
//     createdAt: "2025-03-18T13:30:00",
//     updatedAt: "2025-03-18T13:45:00",
//   },
//   {
//     id: "CMD-005",
//     customer: "Lucie Petit",
//     email: "lucie@email.fr",
//     phone: "06 56 78 90 12",
//     items: [
//       { name: "Pain au chocolat", quantity: 2, price: 2.2 },
//       { name: "Espresso Classique", quantity: 1, price: 3.5 },
//     ],
//     total: 7.9,
//     status: "ready",
//     paymentMethod: "card",
//     createdAt: "2025-03-18T14:00:00",
//     updatedAt: "2025-03-18T14:30:00",
//   },
// ];

const statusConfig = {
  pending: { label: "En attente", icon: Clock, color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  preparing: { label: "Préparation", icon: Package, color: "bg-blue-100 text-blue-700 border-blue-200" },
  ready: { label: "Prête", icon: CheckCircle, color: "bg-green-100 text-green-700 border-green-200" },
  completed: { label: "Terminée", icon: Truck, color: "bg-green-100 text-green-700 border-green-200" },
  cancelled: { label: "Annulée", icon: XCircle, color: "bg-red-100 text-red-700 border-red-200" },
};

const statuses = ["Tous", "pending", "preparing", "ready", "completed", "cancelled"];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState<string | null>(null);
  const itemsPerPage = 5;

  const loadOrders = async () => {
    setIsLoading(true);
    const result = await listOrdersAction();
    if (result.success) {
      const statusMap: Record<string, Order["status"]> = {
        en_attente: "pending",
        confirmee: "preparing",
        prete: "ready",
        livree: "completed",
        annulee: "cancelled",
      };
      setOrders(result.data.map((order) => ({
        id: String(order.id),
        customer: order.nom_utilisateur,
        phone: order.telephone,
        items: (order.items ?? []).map((item: { name?: string; quantity?: number; price?: number }) => ({
          name: item.name ?? "Produit",
          quantity: Number(item.quantity ?? 0),
          price: Number(item.price ?? 0),
        })),
        total: Number(order.total ?? 0),
        status: statusMap[order.statut] ?? "pending",
        paymentMethod: "card",
        createdAt: String(order.date),
        updatedAt: String(order.updated_at ?? order.date),
      })));
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    void loadOrders();
  }, []);

  // Statistiques
  const totalOrders = orders.length;
  const pendingCount = orders.filter((o) => o.status === "pending").length;
  const preparingCount = orders.filter((o) => o.status === "preparing").length;
  const readyCount = orders.filter((o) => o.status === "ready").length;
  const completedCount = orders.filter((o) => o.status === "completed").length;
//   const cancelledCount = orders.filter((o) => o.status === "cancelled").length;
  const revenue = orders
    .filter((o) => o.status === "completed" || o.status === "ready")
    .reduce((sum, o) => sum + o.total, 0);

  // Filtrage
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "Tous" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleStatusChange = async (orderId: string, newStatus: Order["status"]) => {
    const statusMap: Record<Order["status"], "en_attente" | "confirmee" | "prete" | "livree" | "annulee"> = {
      pending: "en_attente",
      preparing: "confirmee",
      ready: "prete",
      completed: "livree",
      cancelled: "annulee",
    };
    const result = await updateOrderStatusAction({ id: orderId, statut: statusMap[newStatus] });
    if (result.success) await loadOrders();
    else setError(typeof result.error === "string" ? result.error : "Statut invalide");
    setIsStatusMenuOpen(null);
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const getStatusBadge = (status: Order["status"]) => {
    const config = statusConfig[status];
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}
      >
        <config.icon className="h-3.5 w-3.5" />
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex min-h-screen bg-amber-50/30">
      <div className="flex-1 p-8">
        {error && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-red-700">{error}</p>}
        {isLoading && <p className="mb-4 text-gray-500">Chargement des commandes...</p>}
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">Gestion des commandes</h1>
            <p className="text-gray-600 mt-1">Suivez et gérez toutes vos commandes</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button onClick={() => void loadOrders()} className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition">
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition">
              <Download className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition">
              <Printer className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-[#3C2A21]">{totalOrders}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">En attente</p>
            <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Préparation</p>
            <p className="text-2xl font-bold text-blue-600">{preparingCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Prêtes</p>
            <p className="text-2xl font-bold text-green-600">{readyCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Terminées</p>
            <p className="text-2xl font-bold text-green-700">{completedCount}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">CA (€)</p>
            <p className="text-2xl font-bold text-[#3C2A21]">{revenue.toFixed(2)}</p>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une commande (ID, client)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition ${
                    selectedStatus === status
                      ? "bg-[#3C2A21] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {status === "Tous" ? "Tous" : statusConfig[status as Order["status"]]?.label || status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tableau des commandes */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Commande</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Client</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Articles</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Total</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Statut</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Date</th>
                  <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-amber-50/50 transition">
                    <td className="px-4 py-3 font-medium text-[#3C2A21]">{order.id}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-xs text-gray-400">
                          {order.phone || "Téléphone non renseigné"}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {order.items.length} article(s)
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#3C2A21]">
                      {order.total.toFixed(2)} €
                    </td>
                    <td className="px-4 py-3">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewDetails(order)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <div className="relative">
                          <button
                            onClick={() =>
                              setIsStatusMenuOpen(isStatusMenuOpen === order.id ? null : order.id)
                            }
                            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
                          {isStatusMenuOpen === order.id && (
                            <div className="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-lg border border-gray-100 z-10 py-1">
                              {statuses
                                .filter((s) => s !== "Tous")
                                .map((status) => {
                                  const config = statusConfig[status as Order["status"]];
                                  return (
                                    <button
                                      key={status}
                                      onClick={() =>
                                        handleStatusChange(order.id, status as Order["status"])
                                      }
                                      className="w-full text-left px-4 py-2 text-sm hover:bg-amber-50 flex items-center gap-2 transition"
                                    >
                                      <config.icon className="h-4 w-4" />
                                      {config.label}
                                    </button>
                                  );
                                })}
                            </div>
                          )}
                        </div>
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
                {filteredOrders.length} commande(s) · Page {currentPage} sur {totalPages}
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

        {/* Modal Détails */}
        {isDetailModalOpen && selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#3C2A21]">
                  Détails de la commande
                </h2>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <XCircle className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* En-tête */}
                <div className="grid grid-cols-2 gap-4 bg-amber-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">Commande</p>
                    <p className="font-bold text-[#3C2A21]">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Statut</p>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{formatDate(selectedOrder.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Paiement</p>
                    <p className="font-medium">{selectedOrder.paymentMethod}</p>
                  </div>
                </div>

                {/* Client */}
                <div>
                  <h3 className="font-semibold text-[#3C2A21] mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Client
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-medium">{selectedOrder.customer}</p>
                    <p className="text-sm text-gray-500">
                      {selectedOrder.phone || "Téléphone non renseigné"}
                    </p>
                  </div>
                </div>

                {/* Articles */}
                <div>
                  <h3 className="font-semibold text-[#3C2A21] mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Articles
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                    {selectedOrder.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.quantity}x</span>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{(item.quantity * item.price).toFixed(2)} €</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                      <span>Total</span>
                      <span className="text-[#3C2A21]">{selectedOrder.total.toFixed(2)} €</span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {selectedOrder.notes && (
                  <div>
                    <h3 className="font-semibold text-[#3C2A21] mb-2">Notes</h3>
                    <div className="bg-yellow-50 p-4 rounded-xl text-gray-700">
                      {selectedOrder.notes}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setIsDetailModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Fermer
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-[#3C2A21] hover:bg-[#5C3B2A] text-white transition">
                    Imprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}