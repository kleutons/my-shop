import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs";
import { PageProduct } from "@/components/Pages/Protuct/product";
import { TrendingNow } from "@/components/Products/tredingNow";

export default function Product(){
    return(
        <>
        <Breadcrumbs />
        <PageProduct />
        <TrendingNow />
        </>
    )
}