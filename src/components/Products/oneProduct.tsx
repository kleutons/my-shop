import Image, {StaticImageData} from "next/image";

interface OneProductListProps {
    src: StaticImageData;
    name: string;
    price: string;
}
export function OneProduct(props : OneProductListProps){
    return(
        <div className="cursor-pointer p-3 border-2 bg-white border-gray-200 hover:border-cl-primary hover:shadow-xl hover:shadow-cl-primary/10 transition-colors duration-300 ">
            <Image alt={`Product ${props.name}`} src={props.src} height={250} width={250} className="w-full" />
            <div>
                <p className="text-lg whitespace-nowrap text-ellipsis overflow-hidden">{props.name}</p>
                <p className=" text-2xl font-bold">R$ {props.price}</p>
            </div>
        </div> 
    )
}