
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
    price:string;
    description?:string;
    id:string;
}

export interface CartItem {
    id: string;
    nom: string;
    prix: number;
    image: string;
    quantity: number;
    unite?: string;
    description?: string;
    stock?: number;
     images?: string[];
}

export interface Produit extends CartItem {
    unite: string;
    description: string;
    stock: number;
    quantity: number;
}
