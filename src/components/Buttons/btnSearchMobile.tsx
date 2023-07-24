'use client'
import { SvgBack } from "@/assets/icons/back";
import { SvgSearch } from "@/assets/icons/search";
import { InputSearch } from "../Header/inputSearch";
import { useState } from "react";

export function BtnSearchMobile(){
    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <>
            <button className='w-5 h-5 sm:hidden' onClick={() => setIsOpen(true)}>
                <SvgSearch />
            </button>
            {isOpen && 
                <div className='fixed flex items-center justify-center gap-2 top-0 right-0 left-0 bg-white p-2 h-14'>
                    <button className='h-6 w-6' onClick={() => setIsOpen(!isOpen)}>
                        <SvgBack />
                    </button>
                    <InputSearch />
                </div>
            }
        </>
    )
}