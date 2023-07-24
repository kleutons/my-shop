import { TitleHome } from "@/components/Titles/titleHome";
import ProductImg from '@/assets/img/product.jpg'
import { OneProductList } from "./oneProductList";

interface ListProducts {

}
export function ListProducts(props : ListProducts){
    return(
        <div className="my-24">
            <TitleHome title='Produtos em Destaque' />

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3 sm:gap-4">

                {Array.from({length: 8}, (_,index) =>(
                    <OneProductList key={index} src={ProductImg} name="Poltrona de pele de carneiro" price="20,00" />
                ))}

               
            </div>
        </div>
    )
}