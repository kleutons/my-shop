'use client'
import { cn } from "@/utils/class-name";
import { ButtonHTMLAttributes } from "react";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Btn({children, className, ...rest} : BtnProps){

    return(
        <button className={ cn(`border-2 p-2 font-bold text-xl transition-all duration-500`, className)} {...rest}>
            {children}
        </button>
    )
}