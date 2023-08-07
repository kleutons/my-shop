import { ListProducts } from "@/components/Products/listProducts"
import { Product } from "@/types/product"
import { getCategoryName, nameCategory } from "@/utils/utils";
import Link from "next/link"

interface PageCategoriesProps {
    slug?: string;
    dataProducts: Product[];
}


export function PageCategories({slug, dataProducts} : PageCategoriesProps){


    let filteredProduct = dataProducts;
    if(slug){
        filteredProduct = dataProducts.filter(x =>  x.category.toString() === slug);
    }

    return(
        <>
             <h1 className="text-4xl font-bold uppercase mb-10 text-center">{getCategoryName(slug)}</h1>

            <div className="flex flex-wrap gap-3 justify-center w-full mb-14">
                {nameCategory.map((item, i) => {
                    const selectMenu = slug == Object.keys(item)[0] ? 'border-black text-cl-primary' : '';
                    const selectAll = !slug ? 'border-black text-cl-primary' : '';
                    
                    const categoryKey = Object.keys(item)[0];
                    return categoryKey == '0' ? (
                        <Link key={i} href='/categories/'>
                            <div className={`bg-white px-4 text-sm sm:text-base py-1 border-2 border-gray-300 hover:border-gray-900 transition-colors duration-500 ${selectAll}`}>
                                Todos
                            </div>
                        </Link>
                    ):(

                        <Link key={i} href={`/categories/${categoryKey}`}>
                            <div className={`bg-white px-4 text-sm sm:text-base py-1 border-2 border-gray-300 hover:border-gray-900 transition-colors duration-500 ${selectMenu}`}>
                                {Object.values(item)[0]}
                            </div>
                        </Link>
                    );

                    })}
            </div>
            
            
            <ListProducts dataProducts={filteredProduct} />
        </>
    )
}