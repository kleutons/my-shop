'use client'
import { cn } from "@/utils/class-name";
import { ButtonHTMLAttributes } from "react";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Btn({children, className, ...rest} : BtnProps){
  
  // let btnClass = 'bg-black border-black text-white';
  // let btnHover = 'hover:bg-transparent hover:text-black';
  // switch (color) {
  //   case 'blackTransparent':
  //     btnClass = 'bg-transparent border-black text-black';
  //     btnHover = 'hover:bg-black hover:text-white';
  //     break;
  //   case 'red':
  //     btnClass = 'bg-[#fa3e17] border-[#c0290b] text-white';
  //     btnHover = 'hover:bg-red-600';
  //     break;
  //   default:
  //     break;
  // }

  

    return(
        <button className={ cn(`border-2 p-2 font-bold text-xl transition-all duration-500`, className)} {...rest}>
            {children}
        </button>
    )
}