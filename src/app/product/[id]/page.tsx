import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs";
import { PageProduct } from "@/components/Pages/Protuct/product";
import { TrendingNow } from "@/components/Products/tredingNow";
import { Product } from "@/types/product";
import { fetchApi } from "@/utils/fetchApi";
import { ShuffleArray, getCategoryName } from "@/utils/utils";

const getProductsData = async  (): Promise<Product[]> => {
    return fetchApi(
      60 * 2
    )
  }

type IProps = {
    params: { id: string }
}
export default async function Product({ params: { id } }:IProps){
    const parmId = parseInt(id);

    const productsData = await getProductsData();
    const filteredProduct = productsData.find(x => x.id === parmId);
    const filteredTrend = ShuffleArray(productsData).slice(8, 20);



    return(
        <>
        {filteredProduct && 
        
          <Breadcrumbs items={
            [
              {
                name: getCategoryName(filteredProduct.category),
                url: `/categories/${filteredProduct.category}`
              },
              {
                name: filteredProduct.title
              },
            ]} />
        }
        <PageProduct dataProduct={filteredProduct} />
        <TrendingNow dataProducts={filteredTrend} />
        </>
    )
}