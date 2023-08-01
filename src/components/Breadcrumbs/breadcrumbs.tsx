import { SvgArrowBread } from "@/assets/icons/arrowBread";
import { SvgHome } from "@/assets/icons/home";
import Link from "next/link";


interface BreadcrumbsProps {
    items: {
        name: string;
        url?: string;
      }[];
}
export function Breadcrumbs({ items } : BreadcrumbsProps){
    return(
        <div className="w-full text-gray-500 my-5 text-lg">
            <nav>
                <ul className="flex gap-2 items-center">
                    <li className="hover:text-cl-primary">
                        <Link href='/'><SvgHome size={20} /></Link>
                    </li>
                    {items.map((item, i) =>(
                        <li key={`${item.name}-${i}`} className="flex select-none gap-2 items-center"> 
                            <SvgArrowBread size={15} />
                            
                            {item.url ? (
                                <Link className="hover:text-cl-primary" href={item.url}>{item.name}</Link>
                            ):(
                                item.name
                            )}
                        
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}