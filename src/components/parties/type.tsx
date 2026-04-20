
export interface MenuItem {
    name :string;
    link:string;
}
export interface ButtonProps{
      text:string;
      link?:string;
      className?:string;
      linnk?:string
}

export interface imageProps{
    src:string;
    alt:string;
    className?:string;
    name?:string;
    price?:string;
    description?:string;
    id:string;
}

export interface CartItem {
    id: string;
    nom: string;
    prix: number;
    image: string;
    unite?: string;
    description?: string;
    stock?: number;
}

export interface Produit extends CartItem {
    unite: string;
    description: string;
    stock: number;
}
