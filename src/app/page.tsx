import { BannerHome } from "@/components/Pages/Home/Banners/bannersHomes";
import { FeaturedHome } from "@/components/Pages/Home/FeaturedHome/featuredHome";
import { ListProducts } from "@/components/Products/listProducts";

import Banner01 from '@/assets/img/banner01.jpg'
import Banner02 from '@/assets/img/banner02.jpg'
import { TrendingNow } from "@/components/Products/tredingNow";
import { Product } from "@/types/product";
import { fetchApi } from "@/utils/fetchApi";

const getProductsData = async  (): Promise<Product[]> => {
  return fetchApi(
    60 * 2
  )
}

export default async function Home() {

  const productsData = await getProductsData();
  const filteredList = productsData.slice(0, 8);
  const filteredTrend = productsData.slice(8, 20);
  

  return (
    <main className="flex flex-col gap-24">
      <FeaturedHome />
      <ListProducts dataProducts={filteredList} title="Produtos em Destaque" />
      <BannerHome src={Banner01} title="Vida Harmoniosa e Criativa" contentText="Os produtos MyShop são todos feitos em tamanhos padrão para que você possa misturá-los e combiná-los livremente." url="/categories" />

      <TrendingNow dataProducts={filteredTrend} />
      <BannerHome reverse src={Banner02} title="Confortável e Elegante" contentText="Os produtos MyShop são todos feitos em tamanhos padrão para que você possa misturá-los e combiná-los livremente." url="/product/4" />

    </main>
  )
}
