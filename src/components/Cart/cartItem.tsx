import { SvgTrash } from "@/assets/icons/trash";
import Image from "next/image";
import { QuantityValue } from "./quantityValue";
import { ProductInCart } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { useModalCart } from "@/hooks/useModalCart";

export function CartItem(props : ProductInCart){

    const { removeFromCart } = useCart();
    const { setIsOpen } = useModalCart();

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return(
        <div className="flex border border-gray-400 select-none">

            <Link href={`/product/${props.id}`} onClick={handleCloseModal} className=" max-w-[26%]">
                <Image className="w-full h-full object-cover" src={props.mainImg} alt="img" height={150} width={150} />
            </Link>
            <div className="flex flex-col justify-between bg-[#f2f2f2] p-3 text-xl w-full [&>div]:flex [&>div]:justify-between">
                <div>
                    <Link href={`/product/${props.id}`} onClick={handleCloseModal} className=" line-clamp-2 overflow-hidden">{props.title}</Link>
                    <button onClick={() => removeFromCart(props)} className="hover:text-cl-primaryDark">
                        <SvgTrash size={22} />
                    </button>
                </div>
                <div className="font-bold">
                    <QuantityValue idItem={props.id} price={props.regularPrice} quantity={props.quantity} />
                </div>
            </div>
        </div>
    )
}