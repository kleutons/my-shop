import { SvgTrash } from "@/assets/icons/trash";
import Image from "next/image";
import { QuantityValue } from "./quantityValue";
import { ProductInCart } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { useModalCart } from "@/hooks/useModalCart";

interface CartItemProps {
    dataItem: ProductInCart;
}

export function CartItem({ dataItem }: CartItemProps){

    const { removeFromCart } = useCart();
    const { setIsOpen } = useModalCart();

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return(
        <div className="flex border border-gray-400 select-none">

            <Link href={`/product/${dataItem.id}`} onClick={handleCloseModal} className=" max-w-[26%]">
                <Image className="w-full h-full object-cover" src={dataItem.mainImg} alt="img" height={150} width={150} />
            </Link>
            <div className="flex flex-col justify-between bg-[#f2f2f2] p-3 text-xl w-full [&>div]:flex [&>div]:justify-between">
                <div>
                    <Link href={`/product/${dataItem.id}`} onClick={handleCloseModal} className=" line-clamp-2 overflow-hidden">{dataItem.title}</Link>
                    <button onClick={() => removeFromCart(dataItem)} className="hover:text-cl-primaryDark">
                        <SvgTrash size={22} />
                    </button>
                </div>
                <div className="font-bold">
                    <QuantityValue idItem={dataItem.id} price={dataItem.regularPrice} quantity={dataItem.quantity} />
                </div>
            </div>
        </div>
    )
}