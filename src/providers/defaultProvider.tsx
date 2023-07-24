import { ModalProvider } from "@/context/modalContext"
import { ReactNode } from "react"

type DefaultProviderProps ={
    children: ReactNode
}

export function DefaultProvider({ children }: DefaultProviderProps){
    return(
        <ModalProvider>
            { children }
        </ModalProvider>
    )
}