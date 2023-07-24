import { BannerHome } from "@/components/Pages/Home/Banners/bannersHomes";
import { FeaturedHome } from "@/components/Pages/Home/FeaturedHome/featuredHome";
import { ListProducts } from "@/components/Pages/Home/ListProducts/listProducts";

import Banner01 from '@/assets/img/banner01.jpg'
import Banner02 from '@/assets/img/banner02.jpg'

export default function Home() {
  return (
    <main className="h-[1800px]">
      <FeaturedHome />
      <ListProducts />
      <BannerHome src={Banner01} title="Vida Harmoniosa e Criativa" contentText="Os produtos MyShop são todos feitos em tamanhos padrão para que você possa misturá-los e combiná-los livremente." url="#" />
      Teste My Shop 
      <br />
      <BannerHome reverse src={Banner02} title="Confortável e Elegante" contentText="Os produtos MyShop são todos feitos em tamanhos padrão para que você possa misturá-los e combiná-los livremente." url="#" />

      <h1 className='text-2xl font-bold'>
        Live Comfortably
      </h1>


    </main>
  )
}
