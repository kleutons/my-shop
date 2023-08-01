import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs";
import { PageCategories } from "@/components/Pages/Categories/categories";
import { Product } from "@/types/prodruct";
import { fetchApi } from "@/utils/fetchApi";
import { getCategoryName } from "@/utils/utils";

const getProductsData = async  (): Promise<Product[]> => {
    return fetchApi(
      60 * 2
    )
}

type IProps = {
    params: { categories: string[] }
}

export default async function Categories({ params: { categories } }:IProps){
    const productsData = await getProductsData();

    const urlCategories = categories[1] ? 
    `/categories/${categories[1]}` : '/categories'

    let arrayBreadcrumbs = [];
    
    if(!categories[1]){
        arrayBreadcrumbs = [ {
                                name: getCategoryName(categories[1]),
                                url: urlCategories
                            }];
    }else{
        arrayBreadcrumbs = [ {
                                name: 'Todas as Categorias',
                                url: '/categories'
                            },
                        
                            {
                                name: getCategoryName(categories[1]),
                                url: `/categories/${categories[1]}`
                            }];
    }

    return(
        <>
        <Breadcrumbs items={arrayBreadcrumbs} />
        <PageCategories slug={categories[1]} dataProducts={productsData}  />
        </>
    )
}