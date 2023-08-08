import { ProductCheckout } from "@/types/product";
import { Btn } from "../Buttons/btn";
import { use, useState } from "react";

interface BtnCheckoutProps{
    dataItems: ProductCheckout[]
}
export function BtnCheckout({dataItems}: BtnCheckoutProps){
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setError] = useState(false);

    if(showError){
        setTimeout(() => {
            setError(false);
        }, 5000);
    }

    const handleCheckout = async () => {
        setIsLoading(true);
        try{
            const res = await fetch('/api/checkout', {
                method: 'POST',
                body: JSON.stringify({
                    dataItems
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                // Lidar com erros de resposta
                setError(true);
                throw new Error(`HTTP error! Status: ${res.status}`);
                
            }

            const data = await res.json();
            window.location.href = data.url;

        } catch (error) {
            if (error instanceof Error) {
                setError(true);
                console.error("Error:", error.message);
            } else {
                setError(true);
                console.error("Unknown error occurred.");
            }
        }finally {
            setIsLoading(false); 
        }
    }

    return(
        <>  
            <Btn className="px-3 py-3 bg-transparent border-[3px] border-cl-primary text-cl-primary hover:bg-cl-primary hover:text-white whitespace-nowrap disabled:bg-cl-primary/70"
                disabled={isLoading}
                onClick={handleCheckout}
            > {isLoading ? 'Carregando...' : 'Finalizar Compra'} </Btn>

            {showError &&
            <div className="fixed flex gap-2 items-center bg-red-500 text-white shadow-lg shadow-black p-4 bottom-5 left-1/2 -translate-x-1/2">
                <p>
                    Erro ao processar, tente novamente
                </p>
                <button className="text-2xl px-2 hover:bg-red-950 " onClick={() => setError(false)}>x</button>
            </div>
            }
        </>
    )
}