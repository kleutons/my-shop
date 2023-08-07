'use client'
import { useState } from "react";
import { Btn } from "../Buttons/btn";
import { useCart } from "@/hooks/useCart";

interface QuantityValueProps {
    idItem: number;
    price: number;
    quantity: number;
}
export function QuantityValue({idItem, price, quantity = 1} : QuantityValueProps){
    const { updateQuantity } = useCart();
    const [quant, setQuant] = useState(quantity);

    const increase = () => {
        if (quant >= 1 && quant <= 29) {
          const newQaunt = quant + 1;
          setQuant(newQaunt);
          updateQuantity(idItem, newQaunt);
        }
    };
    
      const decrease = () => {
        if (quant > 1) {
          const newQaunt = quant - 1;
          setQuant(newQaunt);
          updateQuantity(idItem, newQaunt);
        }
    };


    return(
        <>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    <Btn onClick={decrease} className="bg-transparent border border-black px-2 py-0 text-xl hover:bg-white hover:text-black"> - </Btn>
                    <p className="bg-white w-6 md:w-8 text-center text-lg py-0 border-y border-black"> {quant} </p>
                    <Btn onClick={increase} className="bg-transparent border border-black px-2 py-0 text-xl font-normal hover:bg-white hover:text-black"> + </Btn>
                </div>
            </div>
            <div>
                <span className="text-base">R$</span>{price * quant}<span className="text-sm">,00</span>
            </div>
        </>
    )
}