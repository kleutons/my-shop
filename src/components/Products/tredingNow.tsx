'use client'
import { OneProduct } from "./oneProduct";
import { TitleHome } from "../Titles/titleHome";
import { useRef } from "react";
import { SvgArrowLeft } from "@/assets/icons/arrowLeft";
import { SvgArrowRight } from "@/assets/icons/arrowRight";
import { Btn } from "../Buttons/btn";
import { Product } from "@/types/prodruct";

interface TrendingNowProps {
    dataProducts: Product[];
}
export function TrendingNow({dataProducts} : TrendingNowProps){
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
                    <Btn onClick={handleLeftButtonClick} className="bg-cl-btn-black text-white hover:bg-cl-primary p-2 px-3 border-none" >
                    <SvgArrowLeft size={20} />
                    </Btn> 
                    <button onClick={handleRightButtonClick} className="bg-cl-btn-black text-white hover:bg-cl-primary p-2 px-3 border-none" >
                     <SvgArrowRight size={20} /> 
                     </button>
                </div>
            </div>

            <div ref={contentDiv} className="flex gap-2 pb-8 scroll-smooth overflow-y-hidden overflow-x-scroll scroll-none">

            {dataProducts.map((item,index) =>(
                <div key={index} className="min-w-[228px]">
                    <OneProduct key={`product-${index}`} src={item.mainImg} name={item.title} price={item.regularPrice} salePrice={item.salePrice} />
                </div>
                ))}

               
            </div>
        </div>
    )
}