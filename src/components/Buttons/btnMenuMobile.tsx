'use client'
import { SvgMenu } from "@/assets/icons/menu";
import { useModal } from "@/hooks/useModal";
import { ModalMenu } from "../Modal/modal";
import { NavMenu } from "../Header/navMenu";


export function BtnMenuMobile(){
    const { setIsOpen } = useModal();
    
    return(
        <>
            <button  onClick={() => setIsOpen(true) } className='w-8 h-8 block sm:hidden'>
                <SvgMenu />
            </button>

            <ModalMenu>
                <ul className="flex flex-col gap-3 items-center text-2xl">
                    <NavMenu />
                </ul>
            </ModalMenu>
        </>
    )
}