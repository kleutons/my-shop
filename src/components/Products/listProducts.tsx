import { TitleHome } from "@/components/Titles/titleHome";
import { OneProduct } from "./oneProduct";
import { Product } from "@/types/product";


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

                {dataProducts &&
                    dataProducts?.map((item,index) =>(
                        <OneProduct key={`product-${index}`} dataItem={item} />
                    ))
                }

               
            </div>
        </div>
    )
}