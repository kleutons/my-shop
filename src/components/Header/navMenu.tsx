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
        title: 'Página do Produto',
        url:  '/product/1'
    }
];


export function NavMenu(){
    return(
        <>
            {MENU.map(menu => (
                <li key={`menu-${menu.title}`} className='subline whitespace-nowrap'>
                    <Link href={menu.url}>
                            {menu.title}
                    </Link>
                </li>
            )
            )}
        </>
    )
}

