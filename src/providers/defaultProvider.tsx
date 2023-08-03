import { CartProvider } from "@/context/cartContext"
import { ReactNode } from "react"

type DefaultProviderProps ={
    children: ReactNode
}

export function DefaultProvider({ children }: DefaultProviderProps){
    return(
        <CartProvider>
            { children }
        </CartProvider>
    )
}