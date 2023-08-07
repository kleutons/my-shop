import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs"
import { PageAbout } from "@/components/Pages/Page/about";
import { PageContact } from "@/components/Pages/Page/contact";
import { PageFaq } from "@/components/Pages/Page/faq";
import { Page } from "@/components/Pages/Page/page";
import { PagePolicy } from "@/components/Pages/Page/policy";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Paginas | MyShop - Ecommerce Minimalista',
}

const arrayPages: { [key: string]: { title: string; content: string | React.ReactNode } } = {
    'about': {
        title: 'Sobre',
        content: <PageAbout />
    },
    'policy': {
        title: 'Política de Privacidade',
        content: <PagePolicy />,
    },
    'faq': {
        title: 'FAQ Dúvidas Frequentes',
        content: <PageFaq />,
    },
    'contact': {
        title: 'Contato',
        content: <PageContact />,
    }
};

interface PageSiteProps {
    params: { slug: string }
}
export default function PageSite({ params: { slug } }:PageSiteProps){

    // Get the title using the given slug
    const pageTitle = arrayPages[slug]?.title || 'Page Not Found';

    const arrayBreadcrumbs = [ 
        {
        name: 'Página',
        url: ''
        },
        {
            name: pageTitle,
            url: ''
        },
    ];

    
    return(
        <>
            <Breadcrumbs items={arrayBreadcrumbs} />
            
            <Page title={pageTitle}>
                {arrayPages[slug]?.content}
            </Page>
        </>
    )
}

export async function generateMetadata({ params: { slug }}: PageSiteProps): Promise<Metadata> {
    // Get the title using the given slug
    const pageTitle = arrayPages[slug]?.title || 'Page Not Found';

    return {
      title: `${pageTitle} | MyShop - Ecommerce Minimalista` ,
      description: `Página ${pageTitle} - MyShop - Ecommerce Minimalista`,
    }
  }