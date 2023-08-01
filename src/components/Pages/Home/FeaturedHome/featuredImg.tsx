import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface FeaturedImgProps {
    name: string;
    linkUrl: string;
    src: StaticImageData;

}
export function FeaturedImg(props : FeaturedImgProps){
    return(
        <Link href={props.linkUrl} >
            <div className='absolute cursor-pointer bg-black/25 top-0 left-0 h-full w-full hover:bg-black/50 transition-colors duration-500'></div>
            <p className='absolute bottom-4 left-4 text-white font-bold text-4xl z-1'>{props.name}</p>
            <Image alt='Categoria Casa' src={props.src} height={500} width={600} className='object-cover object-center h-full' />
        </Link>
    )
}