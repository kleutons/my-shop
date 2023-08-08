'use client'
import { SvgCart } from "@/assets/icons/cart";
import { Modal } from "../Modal/modal";
import { Btn } from "../Buttons/btn";
import { CartItem } from "./cartItem";
import { useModalCart } from "@/hooks/useModalCart";
import { useCart } from "@/hooks/useCart";
import { ProductInCart } from "@/types/product";
import Image from "next/image";
import cartNone from '@/assets/img/cartNone.png';
import { BtnCheckout } from "./btnCheckout";


export function CartControl(){
    
    const { isOpen, setIsOpen } = useModalCart();

    const { cartItems } = useCart();
    const totalItems = cartItems.length;

    const calTotal = (valueList: ProductInCart[]) => {
        return valueList.reduce( (sum, item) => sum += (item.regularPrice * item.quantity), 0);
    }

    const itemsCheckout = cartItems.map((item) => ({
        price: item.idStripe,
        quantity: item.quantity, 
    }));

    return(
        <>
            <button onClick={() => setIsOpen(!isOpen) } className="relative" >
                {totalItems > 0  && 
                    <span className="absolute -top-2 right-0 font-bold text-sm bg-black rounded-full p-0 px-2">{totalItems}</span>
                }
                <SvgCart size={30} />
            </button>

            <Modal showModal={isOpen} setShowModal={setIsOpen}  className="w-full top-0 bottom-0 md:w-[500px] flex flex-col justify-between p-6 gap-4">
                {totalItems == 0 ? (
                    <div className="flex flex-col h-3/4">
                        <h2 className="text-2xl font-bold text-black">Seu Carrinho de Compras ( {totalItems} )</h2>
                        <div className="flex flex-col gap-4 justify-center items-center h-full  w-full">
                            <Image src={cartNone} alt='Seu Carrinho Está Vazio!' width={150} height={150} />
                            <p className="text-2xl pt-0 pb-4">Seu Carrinho Está Vazio!</p>
                            <Btn onClick={() => setIsOpen(false)} className="px-3 py-3 bg-transparent border-[3px] border-cl-primary text-cl-primary hover:bg-cl-primary hover:text-white whitespace-nowrap"> Continue Navegando </Btn>
                        </div>
                    </div>
                ):(
                    <>
                        <h2 className="text-2xl font-bold text-black">Seu Carrinho de Compras ( {totalItems} )</h2>
                        <div className="h-full overflow-y-auto pe-1 flex flex-col gap-3">

                            {cartItems?.map((item) => (
                                <CartItem key={`CartItem-${item.id}`} dataItem={item}  />
                            ))}
                                

                        </div>
                        <div className="flex flex-col gap-2 mb-6 pt-6 md:flex-row md:gap-4 justify-between items-center border-t-2 border-dashed border-gray-500 ">
                            <div className="flex flex-col w-full [&>div]:flex [&>div]:justify-between">
                                <div>
                                    <span>Subtotal:</span> <p>R$ {calTotal(cartItems)}<span className="text-sm">,00</span></p>
                                </div>
                                <div>
                                    <span>Frete:</span>    <span>Grátis</span>
                                </div>
                                <div className=" text-xl font-bold">
                                    <span>Total:</span> <p>R$ {calTotal(cartItems)}<span className="text-sm">,00</span></p>
                                </div>
                            </div>
                            <BtnCheckout dataItems={itemsCheckout} />
                        </div>
                    </>
                )}
            </Modal>
        </>
    )
}