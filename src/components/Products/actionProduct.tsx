'use client'
import { Btn } from "@/components/Buttons/btn";
import { useState } from "react";

interface ActionProductProps {
    id: number
    price: number;
    originalPrice: number ;
}
export function ActionProduct({ id, price, originalPrice} : ActionProductProps){

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity >= 1 && quantity <= 29) {
          setQuantity(quantity + 1);
        }
    };
    
      const decrease = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };

    return(
        <div>
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-0  lg:justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <p className="text-lg md:text-xl font-bold">Quantidade</p>
                    <div className="flex items-center">
                        <Btn onClick={decrease} className="bg-white border border-black px-3 py-1 text-xl md:text-3xl"> - </Btn>
                        <p className="bg-transparent w-8 md:w-12 text-center text-xl py-1 md:py-2 border-y border-black"> {quantity} </p>
                        <Btn onClick={increase} className="bg-white border border-black px-3 py-1 text-xl md:text-3xl font-normal"> + </Btn>
                    </div>
                </div>
                
                <div className="flex gap-2 justify-end">
                    {originalPrice !== 0 &&
                        <p className="text-lg text-gray-600 line-through">R$ {originalPrice},00</p>
                    }
                    <p className="text-black text-3xl font-bold">R$ {price}<span className=" text-lg">,00</span></p> 
                </div>
                
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
                <Btn className="w-full sm:w-1/2 py-3 bg-cl-primaryLigth border-cl-primaryDark text-cl-primary hover:bg-[#fffbf9] border"> Adicione ao Carrinho </Btn>
                <Btn className="w-full sm:w-1/2 py-3 bg-cl-primaryDark  text-white hover:bg-cl-primary"> COMPRAR </Btn>
            </div>
        </div>
    )
}