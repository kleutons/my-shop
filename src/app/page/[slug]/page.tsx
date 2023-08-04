import { Breadcrumbs } from "@/components/Breadcrumbs/breadcrumbs"
import { Page } from "@/components/Pages/Page/page";

interface PageSiteProps {
    params: { slug: string }
}
export default function PageSite({ params: { slug } }:PageSiteProps){


    const arrayPages: { [key: string]: { title: string; content: string | React.ReactNode } } = {
        'about': {
            title: 'Sobre',
            content: ( 
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat enim quam, exercitationem facere molestiae. Ullam, blanditiis officia molestias cumque eius porro maxime ipsa, possimus unde fugit esse, asperiores amet..
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat enim quam, exercitationem facere molestiae. Ullam, blanditiis officia molestias cumque eius porro maxime ipsa, possimus unde fugit esse, asperiores amet...
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat enim quam, exercitationem facere molestiae. Ullam, blanditiis officia molestias cumque eius porro maxime ipsa, possimus unde fugit esse, asperiores amet...
                </div>
            )
        },
        'policy': {
            title: 'Política de Privacidade',
            content: '',
        },
        'faq': {
            title: 'FAQ Dúvidas Frequentes',
            content: '',
        },
        'contact': {
            title: 'Contato',
            content: '',
        }
    };

    // Get the title using the given slug
    const pageTitle = arrayPages[slug]?.title || 'Page Not Found';


    const arrayBreadcrumbs = [ 
        {
        name: `Página - ${pageTitle}`,
        url: ''
        }
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