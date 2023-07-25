import { ListProducts } from "@/components/Products/listProducts"
import Link from "next/link"

interface PageCategoriesProps {

}

const ArrayCategory = [
    {
        slug: 'all',
        name: 'Todos'
    },
    {
        slug: 'furnitures',
        name: 'Móveis'
    },
    {
        slug: 'electronics',
        name: 'Eletrônicos'
    },
    {
        slug: 'lamps',
        name: 'Lâmpadas'
    },
    {
        slug: 'kitchen',
        name: 'Cozinha'
    },
    {
        slug: 'chairs',
        name: 'Cadeiras'
    },
    {
        slug: 'cosmetic',
        name: 'Cosméticos'
    }
    
]

export function PageCategories(props : PageCategoriesProps){
    return(
        <>
             <h1 className="text-4xl font-bold uppercase mb-10 text-center">Categorias</h1>

            <div className="flex flex-wrap gap-3 justify-center w-full mb-14">
                {ArrayCategory.map(category => (
                    <Link key={category.slug} href={`/categories/${category.slug}`}>
                        <div className="bg-white px-4 text-sm sm:text-base py-1 border-2 border-gray-300 hover:border-gray-900 transition-colors duration-500">
                            {category.name}
                        </div>
                    </Link>
                ))}
            </div>

            <ListProducts />
        </>
    )
}