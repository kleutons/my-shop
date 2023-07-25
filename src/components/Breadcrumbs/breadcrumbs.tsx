import { SvgArrowBread } from "@/assets/icons/arrowBread";
import { SvgHome } from "@/assets/icons/home";
import Link from "next/link";

interface BreadcrumbsProps {

}
export function Breadcrumbs(props : BreadcrumbsProps){
    return(
        <div className="w-full text-gray-500 my-5 text-lg">
            <nav>
                <ul className="flex gap-2 items-center">
                    <li className="hover:text-black">
                        <Link href='/'><SvgHome size={20} /></Link>
                    </li>
                    <li className="flex gap-2 items-center hover:text-black"> 
                        <SvgArrowBread size={15} />
                        <Link href='/'>Categorias</Link>
                    </li>
                    <li className="flex gap-2 items-center hover:text-black"> 
                        <SvgArrowBread size={15} />
                        <Link href='/'>Produto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}