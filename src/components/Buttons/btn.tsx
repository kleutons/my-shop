'use client'
import { ReactNode, MouseEvent  } from "react";

type ButtonType = undefined | 'blackTransparent' | 'red';

interface BtnProps {
    type?: ButtonType;
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export function Btn({type, children, onClick} : BtnProps){
  
  let btnClass = 'bg-black border-black text-white';
  let btnHover = 'hover:bg-transparent hover:text-black';
  switch (type) {
    case 'blackTransparent':
      btnClass = 'bg-transparent border-black text-black';
      btnHover = 'hover:bg-black hover:text-white';
      break;
    case 'red':
      btnClass = 'bg-[#b6002c] border-[#b6002c] text-white';
      btnHover = 'hover:bg-transparent hover:text-[#b6002c]';
      break;
    default:
      break;
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  }
 

    return(
        <button className={`${btnClass} border-2 p-2 font-bold text-xl transition-all duration-500 ${btnHover}`} onClick={handleClick}>
            {children}
        </button>
    )
}