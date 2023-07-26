import Link from "next/link";

const MENU = [
    {
        title: 'Home',
        url:  '/'
    },
    {
        title: 'Categorias',
        url:  '/categories'
    },
    {
        title: 'Promo',
        url:  '/product/a'
    }
];


export function NavMenu(){
    return(
        <>
            {MENU.map(menu => (
                <li key={`menu-${menu.title}`} className='subline'>
                    <Link href={menu.url}>
                            {menu.title}
                    </Link>
                </li>
            )
            )}
        </>
    )
}

