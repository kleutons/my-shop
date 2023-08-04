'use client'
import { useState } from "react";
import { Modal } from "../Modal/modal";
import { SvgMenu } from "@/assets/icons/menu";
import { NavMenu } from "./navMenu";


export function MenuMobile(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button  onClick={() => setShowModal(!showModal) } className='w-8 h-8 block md:hidden'>
                <SvgMenu />
            </button>

            <Modal showModal={showModal} setShowModal={setShowModal}  className="w-full top-0 bottom-0 md:w-[500px] flex items-center justify-center select-none">
                <ul className="flex flex-col gap-6 items-center text-3xl" onClick={() => setShowModal(!showModal)}>
                    <NavMenu />
                </ul>
            </Modal>
        </>
    )
}