
export type ProductCategory = "chair" | "kitchen" | "lamp" | "furniture" | "cosmetic" | "electronic";

export type OuterImg = string;

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
    salePrice: number;
    mainImg: string;
    outerImgs: OuterImg[];
    specs:  string;
    details: DetailsProduct;
}