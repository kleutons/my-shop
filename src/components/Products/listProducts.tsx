import { TitleHome } from "@/components/Titles/titleHome";
import ProductImg from '@/assets/img/product.jpg'
import { OneProduct } from "./oneProduct";

interface ListProducts {
    title?: string;
}
export function ListProducts({title} : ListProducts){
    return(
        <div>
            {title && 
                <TitleHome title={title} />
            }

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3 sm:gap-4">

                {Array.from({length: 8}, (_,index) =>(
                    <OneProduct key={index} src={ProductImg} name="Poltrona de pele de carneiro" price="20,00" />
                ))}

               
            </div>
        </div>
    )
}