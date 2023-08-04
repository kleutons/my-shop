import { CartProvider } from "@/context/cartContext"
import { ModalCartProvider } from "@/context/modalCartContext"
import { ReactNode } from "react"

type DefaultProviderProps ={
    children: ReactNode
}

export function DefaultProvider({ children }: DefaultProviderProps){
    return(
        <ModalCartProvider >
            <CartProvider>
                { children }
            </CartProvider>
        </ModalCartProvider>
    )
}