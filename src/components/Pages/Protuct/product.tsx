
import { Product } from "@/types/product";
import { percentValue } from "@/utils/utils";
import { ProductsImgs } from "./productImgs";
import { ActionProduct } from "@/components/Products/actionProduct";


interface PageProductProps {
    dataProduct?: Product;
}
export function PageProduct({dataProduct} : PageProductProps){

    const discont = dataProduct ? percentValue({ price: dataProduct.regularPrice, priceSale: dataProduct.originalPrice }) : null;


    return(
        <>  
        {!dataProduct ? (
            <>
                <div className="pt-10 pb-48 text-center text-3xl"> Produto Não encontrado</div>
            </>
        ): (
            <>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-2 w-full mb-20">
                    <h1 className="block md:hidden text-3xl font-bold text-center">{dataProduct.title}</h1>  
                    <div className="flex flex-col justify-end w-ful md:w-1/2 h-auto md:h-[600px]">
                        <ProductsImgs mainImgUrl={dataProduct.mainImg} otherImgsUrl={dataProduct.otherImgs} />
                    </div>
                    <div className="w-ful md:w-1/2 flex flex-col justify-between gap-8  h-auto md:h-[600px] bg-[#eeeeee] px-6 md:px-4 lg:px-8 pt-6 pb-10"> 
                        <h1 className="hidden md:block text-3xl font-bold text-center">{dataProduct.title}</h1>  
                        <p className=" text-2xl">
                            {dataProduct.specs}
                        </p>
                       <ActionProduct id={dataProduct.id} price={dataProduct.regularPrice} originalPrice={dataProduct.originalPrice} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row sm:justify-between gap-6 mb-20">
                    <div className="bg-[#eeeeee] p-5 md:p-8 w-full">
                        <p className="text-2xl font-bold mb-1 md:mb-3">Textura:</p>
                        <p>{dataProduct.details.texture}</p>
                    </div>

                    <div className="bg-[#eeeeee] p-5 md:p-8 w-full">
                        <p className="text-2xl font-bold mb-1 md:mb-3">Peso:</p>
                        <p>{dataProduct.details.weight}</p>
                    </div>

                    <div className="bg-[#eeeeee] p-5 md:p-8 w-full">
                        <p className="text-2xl font-bold mb-1 md:mb-3">Tamanho:</p>
                        <p>{dataProduct.details.size}</p>
                    </div>
                </div>
            </>
        )}

        </>
    )
}