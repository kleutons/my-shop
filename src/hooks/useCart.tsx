'use client'
import { CartContext } from "@/context/cartContext"
import { useContext } from "react"

export function useCart(){
    return useContext(CartContext);
}