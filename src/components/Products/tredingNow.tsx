'use client'
import { OneProduct } from "./oneProduct";
import ProductImg from '@/assets/img/product.jpg'
import { TitleHome } from "../Titles/titleHome";
import { useRef } from "react";
import { SvgArrowLeft } from "@/assets/icons/arrowLeft";
import { SvgArrowRight } from "@/assets/icons/arrowRight";
import { Btn } from "../Buttons/btn";

interface TrendingNowProps {

}
export function TrendingNow(props : TrendingNowProps){
    const contentDiv = useRef<HTMLDivElement>(null);
    const scrollStep = 235; // largura desvio apos click

    const handleLeftButtonClick = () => {
        contentDiv.current!.scrollLeft -= scrollStep;
      };
    
      const handleRightButtonClick = () => {
        contentDiv.current!.scrollLeft += scrollStep;
    };

    return(
        <div>
            
            <div className="flex justify-between items-center">
                <TitleHome title='Tendência' />
                <div className="flex gap-2">
                    <Btn onClick={handleLeftButtonClick} className="bg-black text-white hover:bg-cl-primary p-2 px-3 border-none" >
                    <SvgArrowLeft size={20} />
                    </Btn> 
                    <button onClick={handleRightButtonClick} className="bg-black text-white hover:bg-cl-primary p-2 px-3 border-none" >
                     <SvgArrowRight size={20} /> 
                     </button>
                </div>
            </div>

            <div ref={contentDiv} className="flex gap-2 pb-4 scroll-smooth overflow-y-hidden overflow-x-scroll scroll-none">

            {Array.from({length: 8}, (_,index) =>(
                <div key={index} className="min-w-[228px]">
                    <OneProduct key={index} src={ProductImg} name="Poltrona de pele de carneiro asdsadsadsadsa aadsadas " price="20,00" />
                </div>
                ))}

               
            </div>
        </div>
    )
}