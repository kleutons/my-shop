import { SvgSearchLigth } from "@/assets/icons/searchLigth"
import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs"
import { ListProducts } from "@/components/Products/listProducts"
import { Product } from "@/types/product"
import { fetchApi } from "@/utils/fetchApi"
import { searchProducts } from "@/utils/searchProducts"
import Image from "next/image"
import notFound from '@/assets/img/notFound.png'
import { TrendingNow } from "@/components/Products/tredingNow"
import { ShuffleArray } from "@/utils/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Buscar | MyShop - Ecommerce Minimalista',
  }

const getProductsData = async  (): Promise<Product[]> => {
    return fetchApi(
      60 * 2
    )
}


export function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center w-full text-center" >
            <Image src={notFound} alt="Nenhum resultado foi encontrado" width={150} height={150} />
            <div className="text-lg">
                Nenhum resultado foi encontrado
            </div>
        </div>
    );
};

interface SearchProps {
    searchParams: { keyword?: string | undefined }
}
export default async function Search({ searchParams: { keyword } }: SearchProps){
    
    const productsData = await getProductsData();
    const filteredProducts = searchProducts(productsData, keyword!);
    const filteredTrend = ShuffleArray(productsData).slice(8, 20);


    
    const arrayBreadcrumbs = [ 
        {
        name: 'Buscar',
        url: ''
        }
    ];

   

    return(
        <div className=" min-h-[400px]">
            <Breadcrumbs items={arrayBreadcrumbs} />
            {keyword ? (
                <>
                <h1 className="text-xl flex gap-2 mb-8 items-center"> <span className=' text-gray-600'> <SvgSearchLigth size={20} /> </span> Resultado da pesquisa para: {"'"}{keyword}{"'"}</h1>

                {filteredProducts.length ? (
                    <ListProducts dataProducts={filteredProducts} />
                ):(
                    <NotFound />
                )}
                </>
            ):(
                <NotFound />
            )}
            <div className="mt-36 pt-16  border-t border-gray-300">
                <TrendingNow dataProducts={filteredTrend} />
            </div>
        </div>
    )
}