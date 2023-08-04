import { SvgTrash } from "@/assets/icons/trash";
import Image from "next/image";
import { QuantityValue } from "./quantityValue";
import { ProductInCart } from "@/types/product";


export function CartItem(props : ProductInCart){
    return(
        <div className="flex border border-gray-400 ">
            <div className=" max-w-[26%]">
                <Image className="w-full h-full object-cover" src={props.mainImg} alt="img" height={150} width={150} />
            </div>
            <div className="flex flex-col justify-between bg-[#f2f2f2] p-3 text-xl w-full [&>div]:flex [&>div]:justify-between">
                <div>
                    <p>{props.title}</p>
                    <button className="hover:text-cl-primaryDark">
                        <SvgTrash size={22} />
                    </button>
                </div>
                <div className="font-bold">
                    <QuantityValue price={props.regularPrice} quantity={props.quantity} />
                </div>
            </div>
        </div>
    )
}