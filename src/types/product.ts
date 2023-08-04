
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
