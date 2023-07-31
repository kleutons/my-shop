import { percentValue } from "@/utils/utils";
import Image from "next/image";

interface OneProductListProps {
    src: string;
    name: string;
    price: number;
    salePrice: number;
}
export function OneProduct(props : OneProductListProps){

    const discont = percentValue({ price: props.price, priceSale: props.salePrice });
    

    return(
        <div className="cursor-pointer p-3 border-2 bg-white border-gray-200 hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10 transition-colors duration-300 relative ">
            { discont &&
            <div className="absolute top-0 left-0 px-2 text-sm bg-cl-primary text-white">{discont}% OFF</div> }
            <Image alt={`Product ${props.name}`} src={props.src} height={250} width={250} className="w-full" />
            <div>
                <p className="text-lg whitespace-nowrap text-ellipsis overflow-hidden">{props.name}</p>
                <div className="flex gap-3">
                    
                    { discont ? (
                        <>
                        <p className="text-lg text-gray-600 line-through">R$ {props.price},00</p>
                        <p className="text-2xl font-bold">R$ {props.salePrice}<span className="text-sm">,00</span></p>
                        </>
                    ):(
                        <p className="text-2xl font-bold">R$ {props.price}<span className="text-sm">,00</span></p>
                    )}
                </div>
            </div>
        </div> 
    )
}