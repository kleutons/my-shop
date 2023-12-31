
export enum ProductCategory {
    "chair",
    "kitchen",
    "lamp",
    "furniture",
    "cosmetic",
    "electronic"
}

export type OtherImgs = string;

export type DetailsProduct = {
    texture: string;
    weight: string;
    size: string
}

export type Product = {
    id: number;
    idStripe: string;
    category: ProductCategory;
    title: string;
    regularPrice: number;
    originalPrice: number;
    mainImg: string;
    otherImgs: OtherImgs[];
    specs:  string;
    details: DetailsProduct;
}

type ProductCart ={
    id: number;
    idStripe: string;
    title: string;
    mainImg: string;
    regularPrice: number;
}

export type ProductInCart = ProductCart & {
    quantity: number,
} 

export type ProductCartAdd = ProductCart & {
    quantity: number,
} 

export type ProductCheckout = {
    price: string,
    quantity: number
}