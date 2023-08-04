'use client'
import { Btn } from "@/components/Buttons/btn";
import { useState } from "react";
import { Modal } from "../Modal/modal";
import { useCart } from "@/hooks/useCart";
import { SvgCart } from "@/assets/icons/cart";
import { useModalCart } from "@/hooks/useModalCart";
import { Product } from "@/types/product";

interface ActionProductProps {
    itemProduct: Product;
}
export function ActionProduct({ itemProduct } : ActionProductProps){
    
    // context Cart Produt
    const {setIsOpen} = useModalCart();
    const { cartItems, addToCart } = useCart();
     
    const [showModal, setShowModal] = useState(false);
    const [itemQuantity, setItemQuantity] = useState(1);

   

    const increase = () => {
        if (itemQuantity >= 1 && itemQuantity <= 29) {
            setItemQuantity(itemQuantity + 1);
        }
    };
    
      const decrease = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    const AddCartItem = () => {
        const item = {
            id: itemProduct.id,
            title: itemProduct.title,
            mainImg: itemProduct.mainImg,
            regularPrice: itemProduct.regularPrice,
            quantity: itemQuantity
        }
        addToCart(item);
        setShowModal(!showModal);
    }

    const handleOpenCart = () => {
        setShowModal(false);
        setTimeout( () => {
            setIsOpen(true);
        },300)
    }

    return(
        <div>
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-0  lg:justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <p className="text-lg md:text-xl font-bold">Quantidade</p>
                    <div className="flex items-center">
                        <Btn onClick={decrease} className="bg-white border border-black px-3 py-1 text-xl md:text-3xl"> - </Btn>
                        <p className="bg-transparent w-8 md:w-12 text-center text-xl py-1 md:py-2 border-y border-black"> {itemQuantity} </p>
                        <Btn onClick={increase} className="bg-white border border-black px-3 py-1 text-xl md:text-3xl font-normal"> + </Btn>
                    </div>
                </div>
                
                <div className="flex gap-2 justify-end">
                    {itemProduct.originalPrice !== 0 &&
                        <p className="text-lg text-gray-600 line-through">R$ {itemProduct.originalPrice},00</p>
                    }
                    <p className="text-black text-3xl font-bold">R$ {itemProduct.regularPrice}<span className=" text-lg">,00</span></p> 
                </div>
                
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
                <Btn onClick={AddCartItem} className="w-full sm:w-1/2 py-3 bg-cl-primaryLigth border-cl-primaryDark text-cl-primary hover:bg-[#fffbf9] border"> Adicione ao Carrinho </Btn>
                <Btn className="w-full sm:w-1/2 py-3 bg-cl-primary text-white hover:bg-cl-primaryDark"> COMPRAR </Btn>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} className="w-4/5 md:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 pt-8 rounded-lg text-center">
                ✅ Um novo item foi adicionado ao seu carrinho de compras.
                <p> Você tem <strong>{cartItems.length}</strong> itens no seu carrinho de compras.</p>

                
                <Btn onClick={handleOpenCart} className="mt-8 px-4 bg-white border-cl-primaryDark text-cl-primary hover:bg-cl-primaryLigth border">
                    <div className="flex gap-2 items-center">
                    <SvgCart size={25} />
                    Ver Carrinho
                    </div>
                </Btn>
                
            </Modal>
        </div>
    )
}