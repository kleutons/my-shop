import { Btn } from "@/components/Buttons/btn";
import { Product } from "@/types/prodruct";
import { percentValue } from "@/utils/utils";
import { ProductsImgs } from "./productImgs";


interface PageProductProps {
    dataProduct?: Product;
}
export function PageProduct({dataProduct} : PageProductProps){

    const discont = dataProduct ? percentValue({ price: dataProduct.regularPrice, priceSale: dataProduct.salePrice }) : null;


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
                        <div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <p className="text-lg md:text-xl font-bold">Quantidade</p>
                                    <div className="flex items-center">
                                        <Btn className="bg-white border border-black px-3 py-1 text-xl md:text-3xl"> - </Btn>
                                        <p className="bg-transparent w-8 md:w-12 text-center text-xl py-1 md:py-2 border-y border-black"> 1 </p>
                                        <Btn className="bg-white border border-black px-3 py-1 text-xl md:text-3xl font-normal"> + </Btn>
                                    </div>
                                </div>
                                {discont ? (
                                    <>
                                   <p className="text-lg text-gray-600 line-through">R$ {dataProduct.regularPrice},00</p>
                                   <p className="text-black text-3xl font-bold">R$ {dataProduct.salePrice}<span className=" text-lg">,00</span></p> 
                                    </>
                                ):(
                                    <p className="text-black text-3xl font-bold">R$ {dataProduct.regularPrice}<span className=" text-lg">,00</span></p>
                                )}

                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
                                <Btn className="w-full sm:w-1/2 py-3 bg-cl-primaryLigth border-cl-primaryDark text-cl-primary hover:bg-[#fffbf9] border"> Adicione ao Carrinho </Btn>
                                <Btn className="w-full sm:w-1/2 py-3 bg-cl-primaryDark  text-white hover:bg-cl-primary"> COMPRAR </Btn>
                            </div>
                        </div>
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