// app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Coffee, Users, ShoppingBag, CreditCard, TrendingUp,
  TrendingDown, Calendar, Clock, MessageCircle, Bell,
  ChevronRight, MoreVertical, Download, RefreshCw,
  Eye, CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Enregistrement des composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

// Types
interface StatCard {
  title: string;
  value: string | number;
  change: number;
  icon: any;
  color: string;
}

interface Order {
  id: string;
  customer: string;
  items: string;
  total: number;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
}

interface Notification {
  id: number;
  type: 'order' | 'reservation' | 'alert';
  message: string;
  time: string;
  read: boolean;
}

// Données fictives
const statsData: StatCard[] = [
  {
    title: 'Chiffre d\'affaires (mois)',
    value: '12 450 €',
    change: +18.5,
    icon: CreditCard,
    color: '#3C2A21'
  },
  {
    title: 'Commandes (mois)',
    value: '342',
    change: +12.3,
    icon: ShoppingBag,
    color: '#5C3B2A'
  },
  {
    title: 'Clients actifs',
    value: '1 024',
    change: +8.7,
    icon: Users,
    color: '#8B6B4D'
  },
  {
    title: 'Réservations (mois)',
    value: '89',
    change: -2.4,
    icon: Calendar,
    color: '#A67B5B'
  }
];

const weeklySalesData = {
  labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  datasets: [
    {
      label: 'Ventes (€)',
      data: [420, 480, 380, 520, 680, 720, 550],
      backgroundColor: '#3C2A21',
      borderRadius: 6,
    },
    {
      label: 'Réservations',
      data: [12, 15, 10, 18, 25, 30, 20],
      backgroundColor: '#8B6B4D',
      borderRadius: 6,
    }
  ]
};

const productDistributionData = {
  labels: ['Espresso', 'Cappuccino', 'Latte', 'Thé', 'Autres'],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: ['#3C2A21', '#5C3B2A', '#8B6B4D', '#A67B5B', '#D4A574'],
      borderWidth: 0,
    }
  ]
};

// Données pour un graphique linéaire (évolution mensuelle)
const monthlyRevenueData = {
  labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
  datasets: [
    {
      label: 'Chiffre d\'affaires',
      data: [8500, 9200, 8800, 10100, 11200, 12450],
      borderColor: '#3C2A21',
      backgroundColor: 'rgba(60, 42, 33, 0.1)',
      fill: true,
      tension: 0.4,
    }
  ]
};

const recentOrders: Order[] = [
  { id: '#1234', customer: 'Marie Dupont', items: '2x Espresso, 1x Croissant', total: 12.50, status: 'completed', date: 'Il y a 10 min' },
  { id: '#1235', customer: 'Jean Martin', items: '1x Latte, 1x Pain au chocolat', total: 8.80, status: 'pending', date: 'Il y a 25 min' },
  { id: '#1236', customer: 'Sophie Bernard', items: '3x Cappuccino, 2x Muffins', total: 19.20, status: 'completed', date: 'Il y a 1h' },
  { id: '#1237', customer: 'Pierre Dubois', items: '1x Thé vert, 1x Tarte citron', total: 7.50, status: 'cancelled', date: 'Il y a 2h' },
  { id: '#1238', customer: 'Lucie Petit', items: '2x Smoothie, 1x Sandwich', total: 14.90, status: 'pending', date: 'Il y a 3h' },
];

const notifications: Notification[] = [
  { id: 1, type: 'order', message: 'Nouvelle commande #1235 reçue', time: 'Il y a 5 min', read: false },
  { id: 2, type: 'reservation', message: 'Réservation pour 6 personnes demain 19h', time: 'Il y a 15 min', read: false },
  { id: 3, type: 'alert', message: 'Stock de grains d\'Éthiopie faible (3kg)', time: 'Il y a 1h', read: true },
  { id: 4, type: 'order', message: 'Commande #1234 livrée', time: 'Il y a 2h', read: true },
];

export default function AdminDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const getStatusBadge = (status: Order['status']) => {
    const config = {
      completed: { icon: CheckCircle, color: 'text-green-600 bg-green-50 border-green-200' },
      pending: { icon: Clock, color: 'text-yellow-600 bg-yellow-50 border-yellow-200' },
      cancelled: { icon: XCircle, color: 'text-red-600 bg-red-50 border-red-200' }
    };
    const { icon: Icon, color } = config[status];
    return { Icon, color };
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch(type) {
      case 'order': return <ShoppingBag className="h-5 w-5 text-blue-500" />;
      case 'reservation': return <Calendar className="h-5 w-5 text-green-500" />;
      case 'alert': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  // Options des graphiques
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 12,
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 12,
          },
          padding: 20,
        }
      }
    }
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 12,
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">
            Tableau de bord
          </h1>
          <p className="text-gray-600 mt-1">
            Bienvenue, Administrateur · {currentTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition flex items-center gap-2"
          >
            <RefreshCw className={`h-5 w-5 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline text-sm">Actualiser</span>
          </button>
          <button className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notifications.filter(n => !n.read).length}
            </span>
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold text-[#3C2A21] mt-2">{stat.value}</h3>
                <div className={`flex items-center mt-2 text-sm ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  <span>{Math.abs(stat.change)}%</span>
                  <span className="text-gray-400 ml-1">vs mois dernier</span>
                </div>
              </div>
              <div className="p-3 rounded-xl" style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Ventes hebdomadaires - BarChart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif font-bold text-[#3C2A21]">
              Ventes et réservations (semaine)
            </h3>
            <button className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
              Voir plus <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="h-[300px]">
            <Bar data={weeklySalesData} options={barOptions} />
          </div>
        </div>

        {/* Répartition des produits - PieChart */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-serif font-bold text-[#3C2A21] mb-6">
            Produits les plus vendus
          </h3>
          <div className="h-[300px]">
            <Pie data={productDistributionData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Graphique mensuel - LineChart */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-bold text-[#3C2A21]">
            Évolution mensuelle du chiffre d&apos;affaires
          </h3>
          <button className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
            Voir plus <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="h-[250px]">
          <Line data={monthlyRevenueData} options={lineOptions} />
        </div>
      </div>

      {/* Commandes récentes et notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Commandes récentes */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif font-bold text-[#3C2A21]">
              Commandes récentes
            </h3>
            <div className="flex items-center gap-2">
              <button className="text-sm text-amber-600 hover:text-amber-800 font-medium">
                Voir toutes
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th className="pb-3 font-medium">Commande</th>
                  <th className="pb-3 font-medium">Client</th>
                  <th className="pb-3 font-medium">Articles</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium">Statut</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => {
                  const { Icon, color } = getStatusBadge(order.status);
                  return (
                    <tr key={order.id} className="hover:bg-amber-50/50 transition">
                      <td className="py-3 font-medium text-[#3C2A21]">{order.id}</td>
                      <td className="py-3 text-gray-700">{order.customer}</td>
                      <td className="py-3 text-gray-600 text-sm">{order.items}</td>
                      <td className="py-3 font-semibold text-[#3C2A21]">{order.total.toFixed(2)} €</td>
                      <td className="py-3">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${color}`}>
                          <Icon className="h-3 w-3" />
                          {order.status === 'completed' && 'Terminée'}
                          {order.status === 'pending' && 'En cours'}
                          {order.status === 'cancelled' && 'Annulée'}
                        </span>
                      </td>
                      <td className="py-3">
                        <button className="text-gray-400 hover:text-[#3C2A21] transition">
                          <Eye className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-serif font-bold text-[#3C2A21] mb-6">
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-3 rounded-xl transition ${notif.read ? 'bg-gray-50' : 'bg-amber-50 border border-amber-200'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{getNotificationIcon(notif.type)}</div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${notif.read ? 'text-gray-600' : 'text-[#3C2A21] font-medium'}`}>
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                  </div>
                  {!notif.read && (
                    <span className="h-2 w-2 bg-red-500 rounded-full flex-shrink-0"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-sm text-amber-600 hover:text-amber-800 font-medium py-2 border border-dashed border-gray-200 rounded-xl hover:border-amber-300 transition">
            Marquer toutes comme lues
          </button>
        </div>
      </div>

      {/* Section rapide - Actions admin */}
      <div className="mt-8 bg-gradient-to-r from-[#3C2A21] to-[#5C3B2A] rounded-2xl shadow-lg p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-serif font-bold">Actions rapides</h4>
            <p className="text-amber-200 text-sm">Gérez votre café en quelques clics</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition flex items-center gap-2">
              <Coffee className="h-4 w-4" />
              Ajouter un produit
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Gérer les réservations
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Voir les avis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}