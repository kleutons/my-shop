'use client'
import Image from "next/image";
import { useState } from "react";

interface ProductsImgsProps {
 mainImgUrl: string;
 otherImgsUrl?: string[];
 discontItem?: number | null;
}
export function ProductsImgs({mainImgUrl, otherImgsUrl, discontItem} : ProductsImgsProps){
    
    const [selectImg, setSelectImag] = useState<string>(mainImgUrl);

    const handleSelectImg = (img:string) => {
         setSelectImag(img);
    };

    

    return(
        <>
            <div className="flex relative h-[70%] w-full justify-center">
                { discontItem &&
                    <div className="absolute top-0 left-0 px-2 text-lg bg-cl-primary text-white">Oferta: {discontItem}% OFF</div> 
                }
                <Image src={selectImg} alt="img Product" height={450} width={450} className="h-full object-cover w-full md:w-[75%]" />
            </div>
            <div className="flex items-center gap-2 justify-center py-3 w-full">
                <Image src={mainImgUrl} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter border hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10" onClick={ () => handleSelectImg(mainImgUrl)} onMouseEnter={ () => handleSelectImg(mainImgUrl) } />

                {otherImgsUrl && otherImgsUrl.map((imgUrl, index) => (
                    <Image key={`outerImgs-${index}`} src={imgUrl} alt='imgPt02' height={120} width={120} className="cursor-pointer first-letter border hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10" onClick={ () => handleSelectImg(imgUrl)} onMouseEnter={ () => handleSelectImg(imgUrl) }/>
                ))}
            </div>
        </>
    )
}