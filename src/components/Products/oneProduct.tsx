import { Product } from "@/types/prodruct";
import { percentValue } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

interface OneProductListProps {
    dataItem: Product;
}
export function OneProduct({ dataItem } : OneProductListProps){

    const discont = percentValue({ price: dataItem.regularPrice, priceSale: dataItem.salePrice });
    

    return(
        <Link href={`/product/${dataItem.id}`}>
            <div className=" p-3 border-2 bg-white border-gray-200 hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10 transition-colors duration-300 relative max-w-[290px] ">
                { discont &&
                    <div className="absolute top-0 left-0 px-2 text-sm bg-cl-primary text-white">{discont}% OFF</div> 
                }

                <Image alt={`Product ${dataItem.title}`} src={dataItem.mainImg} height={250} width={250} className="w-full" />
                <div>
                    <p className="text-lg whitespace-nowrap text-ellipsis overflow-hidden">{dataItem.title}</p>
                    <div className="flex gap-3">
                        
                        { discont ? (
                            <>
                            <p className="text-lg text-gray-600 line-through">R$ {dataItem.regularPrice},00</p>
                            <p className="text-2xl font-bold">R$ {dataItem.salePrice}<span className="text-sm">,00</span></p>
                            </>
                        ):(
                            <p className="text-2xl font-bold">R$ {dataItem.regularPrice}<span className="text-sm">,00</span></p>
                        )}
                    </div>
                </div>
            </div> 
        </Link>
    )
}