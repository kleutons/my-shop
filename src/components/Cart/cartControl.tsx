'use client'
import { SvgCart } from "@/assets/icons/cart";
import { useState } from "react";
import { Modal } from "../Modal/modal";
import { Btn } from "../Buttons/btn";
import { CartItem } from "./cartItem";
import { useModalCart } from "@/hooks/useModalCart";


export function CartControl(){
    
    const { isOpen, setIsOpen } = useModalCart();

    return(
        <>
            <button  onClick={() => setIsOpen(!isOpen) } >
                <SvgCart size={30} />
            </button>

            <Modal showModal={isOpen} setShowModal={setIsOpen}  className="w-full top-0 bottom-0 md:w-[500px] flex flex-col justify-between p-6 gap-4">
                <h2 className="text-2xl font-bold text-black">Seu Carrinho de Compras ()</h2>
                <div className="h-full overflow-y-auto pe-1 flex flex-col gap-3">

                            <CartItem id={1} title="Teste Produto" mainImg='https://kleutons.github.io/api-myshop/img/1.jpg' regularPrice={197} quantity={1} />

                            <CartItem id={2} title="Produto2" mainImg='https://kleutons.github.io/api-myshop/img/2.jpg' regularPrice={97} quantity={5} />
                        
                        

                </div>
                <div className="flex flex-col gap-2 h-28 mb-8 pt-6 md:flex-row md:gap-4 justify-between items-center border-t-2 border-dashed border-gray-500 ">
                    <div className="flex flex-col w-full [&>div]:flex [&>div]:justify-between">
                        <div>
                            <span>Subtotal:</span> <span>R$</span>
                        </div>
                        <div>
                            <span>Frete:</span>    <span>Grátis</span>
                        </div>
                        <div className=" text-xl font-bold">
                            <span>Total:</span> <span>R$</span>
                        </div>
                    </div>

                    <Btn className="px-3 py-3 bg-transparent border-[3px] border-cl-primary text-cl-primary hover:bg-cl-primary hover:text-white whitespace-nowrap"> Finalizar Compra </Btn>
                </div>
            </Modal>
        </>
    )
}