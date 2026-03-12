export interface Boisson {
  id: number;
  nom: string;
  description: string;
  prix: number;
  categorie: 'chaude' | 'sans-alcool' | 'alcoolisee';
  populaire?: boolean;
  image?: string;
}

export interface Utilisateur {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  telephone: string;
  adresse?: Adresse;
}

export interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
  complement?: string;
}

export interface Commande {
  id: string;
  utilisateurId: string;
  items: PanierItem[];
  statut: 'en_attente' | 'confirmee' | 'prete' | 'livree' | 'annulee';
  total: number;
  date: Date;
  adresseLivraison?: Adresse;
}

export interface PanierItem {
  boisson: Boisson;
  quantite: number;
  notes?: string;
}