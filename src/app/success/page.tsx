'use client' 
import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs";
import { Btn } from "@/components/Buttons/btn";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";


interface IProps {
    searchParams: { payment: string }
}

export default function Sucess({ searchParams: { payment } }: IProps){
    const { cartItems, clearCart } = useCart();

    const router = useRouter();
    

    // Usando useMemo para memorizar os itens do carrinho
    const itemsToDisplay = useMemo(() => [...cartItems], [cartItems]);

    // Renderizar os itens do carrinho
    const cartItemsJSX = itemsToDisplay.map((item) => (
        <Image key={item.id} src={item.mainImg} width={100} height={100} alt='produtos' />
    ));

    if (payment !== 'true') {
        router.push('/');
    }
    


    const arrayBreadcrumbs = [ 
        {
        name: 'Pedidos',
        url: ''
        }
    ];

    

    return(
         <>
            {payment === 'true' &&
                <>
                <Breadcrumbs items={arrayBreadcrumbs} />

                <div className="min-h-[400px] text-gray-600 text-center">
                    <h1 className="text-4xl font-bold uppercase mb-10 text-black">Compra Efetuada!</h1>
                    <p className="text-lg">
                        Uhuul... Teste de compra seus produtos, compra efetuata com sucesso.
                    </p>
                    <div className="flex justify-center my-8">
                        {cartItemsJSX}
                    </div>
                    <Link href='/' >
                        <Btn className="px-3 py-3 bg-transparent border-[3px] border-cl-primary text-cl-primary hover:bg-cl-primary hover:text-white whitespace-nowrap" onClick={() => clearCart()}>Voltar as Compras</Btn>
                    </Link>
                </div>
                </> 
            }
         </> 
    )
}