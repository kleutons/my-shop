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
        <div className="flex gap-2 w-full">
            <div className="w-1/2 h-full">
                <div className="flex h-[70%] w-full justify-center">
                    <Image src={imgPt01} alt="img Product" height={450} width={450} className="h-full object-cover w-[75%]" />
                </div>
                <div className="flex items-center gap-2 justify-center py-3 w-full">
                    <Image src={imgPt01} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter" />
                    <Image src={imgPt02} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter" />
                    <Image src={imgPt03} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter" />
                </div>
            </div>
            <div className="flex flex-col justify-between gap-4 w-1/2 h-full bg-[#eeeeee] px-8 pt-4 pb-10"> 
                <h1 className="text-4xl font-bold text-center">Nome do Produto</h1>  
                <p>
                    Sum é uma série desenhada pelo designer dinamarquês Simon Legald, que é o epítome da elegância moderna. Elegantes e resolutos como a ponta de uma asa, os apoios de braços estendem-se de forma convidativa, como se quisessem abraçá-lo no espaço suave e acolhedor da poltrona.
                </p>
                <div>
                    <p>Quantidade</p>
                    <div>
                        <button> - </button>
                        <p> 1 </p>
                        <button> + </button>
                    </div>
                    <p>R$ 119,00</p>
                </div>
                <div className="flex justify-between w-full gap-3">
                    <Btn className="w-1/2 py-3 bg-cl-primaryLigth border-cl-primaryDark text-cl-primary hover:bg-[#fffbf9] border"> Adicione ao Carrinho </Btn>
                    <Btn className="w-1/2 py-3 bg-cl-primaryDark  text-white hover:bg-cl-primary"> COMPRAR </Btn>
                </div>
            </div>
        </div>

        </>
    )
}