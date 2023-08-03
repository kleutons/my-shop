'use client'
import { SvgCart } from "@/assets/icons/cart";
import { useState } from "react";
import { Modal } from "../Modal/modal";


export function CartControl(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button  onClick={() => setShowModal(!showModal) } className='w-7 h-5 md:w-8 sm:h-6'>
                <SvgCart />
            </button>

            <Modal showModal={showModal} setShowModal={setShowModal}  className="w-full top-0 bottom-0 md:w-[500px] flex items-center justify-center">
                Carrinhoasdsa
            </Modal>
        </>
    )
}