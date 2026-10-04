// app/admin/clients/page.tsx
"use client";

import { useEffect, useState } from "react";
import { listOrdersAction } from "@/lib/actions/orders";
import {
  Search,
  Eye,
  Phone,
  RefreshCw,
  XCircle,
} from "lucide-react";

// Types
interface ClientOrder {
  id: string;
  date: string;
  status: string;
  total: number;
  items: { name: string; quantity: number; price: number }[];
}

interface Client {
  id: string;
  name: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  firstOrderDate: string;
  lastOrderDate?: string;
  orders: ClientOrder[];
}

const normalizeClientName = (name: string) =>
  name.trim().toLocaleLowerCase("fr").replace(/\s+/g, " ");

const normalizePhone = (phone: string | null | undefined) =>
  phone?.replace(/\D/g, "") ?? "";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const itemsPerPage = 5;

  const loadClients = async () => {
    setIsLoading(true);
    try {
      const result = await listOrdersAction();
      if (!result.success) {
        setClients([]);
        setError(result.error);
        return;
      }

      const clientsByIdentity = new Map<string, Client>();
      for (const order of result.data) {
        const name = String(order.nom_utilisateur ?? "").trim() || "Client";
        const phone = String(order.telephone ?? "").trim();
        const normalizedPhone = normalizePhone(phone);
        const identity = normalizedPhone
          ? `phone:${normalizedPhone}`
          : `name:${normalizeClientName(name)}`;
        const date = String(order.date);
        const clientOrder: ClientOrder = {
          id: String(order.id),
          date,
          status: String(order.statut),
          total: Number(order.total ?? 0),
          items: (order.items ?? []).map((item: {
            name?: string;
            quantity?: number;
            price?: number;
          }) => ({
            name: item.name ?? "Produit",
            quantity: Number(item.quantity ?? 0),
            price: Number(item.price ?? 0),
          })),
        };
        const client = clientsByIdentity.get(identity);

        if (client) {
          client.orders.push(clientOrder);
          client.totalOrders += 1;
          client.totalSpent += clientOrder.total;
          if (!client.phone && phone) client.phone = phone;
          if (new Date(date) < new Date(client.firstOrderDate)) {
            client.firstOrderDate = date;
          }
        } else {
          clientsByIdentity.set(identity, {
            id: identity,
            name,
            phone,
            totalOrders: 1,
            totalSpent: clientOrder.total,
            firstOrderDate: date,
            lastOrderDate: date,
            orders: [clientOrder],
          });
        }
      }

      setClients(Array.from(clientsByIdentity.values()));
      setError("");
    } catch {
      setClients([]);
      setError("Impossible de charger les clients depuis les commandes.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadClients();
  }, []);

  // Statistiques
  const totalClients = clients.length;
  const totalOrders = clients.reduce((sum, client) => sum + client.totalOrders, 0);
  const totalRevenue = clients.reduce((sum, c) => sum + c.totalSpent, 0);

  // Filtrage
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm);
    return matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleViewDetails = (client: Client) => {
    setSelectedClient(client);
    setIsDetailModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="flex min-h-screen bg-amber-50/30">

      <div className="flex-1 p-8">
        {error && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-red-700">{error}</p>}
        {isLoading && <p className="mb-4 text-gray-500">Chargement des clients...</p>}
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">Gestion des clients</h1>
            <p className="text-gray-600 mt-1">Gérez votre base de clients</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button onClick={() => void loadClients()} className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition">
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Total clients</p>
            <p className="text-2xl font-bold text-[#3C2A21]">{totalClients}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Commandes</p>
            <p className="text-2xl font-bold text-[#3C2A21]">{totalOrders}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">Clients avec téléphone</p>
            <p className="text-2xl font-bold text-[#3C2A21]">
              {clients.filter((client) => client.phone).length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500">CA total généré</p>
            <p className="text-2xl font-bold text-[#3C2A21]">{totalRevenue.toFixed(2)} €</p>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un client (nom ou téléphone)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Tableau des clients */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Client</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Contact</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Commandes</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Dépenses</th>
                  <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedClients.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                      {isLoading
                        ? "Chargement des clients..."
                        : searchTerm
                          ? "Aucun client ne correspond à la recherche."
                          : "Aucune commande enregistrée."}
                    </td>
                  </tr>
                ) : paginatedClients.map((client) => (
                  <tr key={client.id} className="hover:bg-amber-50/50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-[#3C2A21]">
                            {client.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-1.5 text-gray-600">
                          <Phone className="h-3.5 w-3.5" />
                          {client.phone || "Téléphone non renseigné"}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#3C2A21]">
                      {client.totalOrders}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#3C2A21]">
                      {client.totalSpent.toFixed(2)} €
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewDetails(client)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                        >
                          <Eye className="h-4 w-4" />
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
                {filteredClients.length} client(s) · Page {currentPage} sur {totalPages}
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
        {isDetailModalOpen && selectedClient && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#3C2A21]">
                  Détails du client
                </h2>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <XCircle className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-2xl font-bold">
                    {selectedClient.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#3C2A21]">
                      {selectedClient.name}
                    </h3>
                    <p className="text-gray-500">
                      Première commande le {formatDate(selectedClient.firstOrderDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-medium">
                    {selectedClient.phone || "Non renseigné"}
                  </p>
                </div>
              </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500">Commandes</p>
                    <p className="text-2xl font-bold text-[#3C2A21]">{selectedClient.totalOrders}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500">Dépenses totales</p>
                    <p className="text-2xl font-bold text-[#3C2A21]">{selectedClient.totalSpent.toFixed(2)} €</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500">Dernière commande</p>
                    <p className="text-xl font-bold text-[#3C2A21]">
                      {selectedClient.lastOrderDate ? formatDate(selectedClient.lastOrderDate) : "—"}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-[#3C2A21]">
                    Historique des commandes
                  </h3>
                  {selectedClient.orders.length === 0 ? (
                    <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-500">
                      Aucune commande associée à ce client.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {selectedClient.orders.map((order) => (
                        <li key={order.id} className="rounded-xl bg-gray-50 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-medium text-[#3C2A21]">
                              Commande n° {order.id}
                            </p>
                            <span className="text-sm font-semibold">
                              {order.total.toFixed(2)} €
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {formatDate(order.date)} · {order.status.replaceAll("_", " ")}
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600">
                            {order.items.map((item, index) => (
                              <li key={`${order.id}-${index}`}>
                                {item.quantity} × {item.name} — {item.price.toFixed(2)} €
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setIsDetailModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Fermer
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