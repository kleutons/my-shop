import Image from "next/image";
import imgPt01 from '@/assets/img/imgPt01.jpg'
import imgPt02 from '@/assets/img/imgPt02.webp'
import imgPt03 from '@/assets/img/imgPt03.webp'
import { Btn } from "@/components/Buttons/btn";


interface PageProductProps {

}
export function PageProduct(props : PageProductProps){
    return(
        <>  
        <div className="flex flex-col md:flex-row gap-4 sm:gap-2 w-full mb-20">
            <h1 className="block md:hidden text-3xl font-bold text-center">Nome do Produto</h1>  
            <div className="w-ful md:w-1/2 h-auto mb-6 md:mb-0 md:h-[600px]">
                <div className="flex h-[70%] w-full justify-center">
                    <Image src={imgPt01} alt="img Product" height={450} width={450} className="h-full object-cover w-full md:w-[75%]" />
                </div>
                <div className="flex items-center gap-2 justify-center py-3 w-full">
                    <Image src={imgPt01} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter border hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10" />
                    <Image src={imgPt02} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter border hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10" />
                    <Image src={imgPt03} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter border hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10" />
                </div>
            </div>
            <div className="w-ful md:w-1/2 flex flex-col justify-between gap-8  h-auto md:h-[600px] bg-[#eeeeee] px-6 md:px-4 lg:px-8 pt-6 pb-10"> 
                <h1 className="hidden md:block text-3xl font-bold text-center">Nome do Produto</h1>  
                <p className=" text-2xl">
                    Sum é uma série desenhada pelo designer dinamarquês Simon Legald, que é o epítome da elegância moderna. Elegantes e resolutos como a ponta de uma asa, os apoios de braços estendem-se de forma convidativa, como se quisessem abraçá-lo no espaço suave e acolhedor da poltrona.
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
                        <p className="text-black text-3xl font-bold">R$ 119,00</p>
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
                <p>Material Confortável</p>
            </div>

            <div className="bg-[#eeeeee] p-5 md:p-8 w-full">
                <p className="text-2xl font-bold mb-1 md:mb-3">Peso:</p>
                <p>25kg</p>
            </div>

            <div className="bg-[#eeeeee] p-5 md:p-8 w-full">
                <p className="text-2xl font-bold mb-1 md:mb-3">Tamanho:</p>
                <p>60cm x 30cm</p>
            </div>
        </div>

        </>
    )
}