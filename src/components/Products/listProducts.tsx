import { TitleHome } from "@/components/Titles/titleHome";
import { OneProduct } from "./oneProduct";
import { Product } from "@/types/prodruct";


interface ListProducts {
    title?: string;
    dataProducts: Product[];
}
export function ListProducts({title, dataProducts} : ListProducts){
    
    return(
        <div>
            {title && 
                <TitleHome title={title} />
            }

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3 sm:gap-4">

                {dataProducts.map((item,index) =>(
                    <OneProduct key={`product-${index}`} src={item.mainImg} name={item.title} price={item.regularPrice} salePrice={item.salePrice} />
                ))}

               
            </div>
        </div>
    )
}