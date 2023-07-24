import { BtnPrimary } from "@/components/Buttons/btnPrimary";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BannerHomeProps {
    reverse?: boolean;
    src: StaticImageData;
    title: string;
    contentText: string;
    url: string;
}
export function BannerHome({reverse = false, src, title, contentText, url} : BannerHomeProps){

    const classReverse = reverse ? 'flex-row-reverse' : '';

    return(
        <div className={`bg-[#e9e9e9] flex h-[400px] relative ${classReverse}`}>
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
                <div className="w-11/12 sm:w-3/4 flex flex-col gap-6">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className=" text-lg">{contentText}</p>
                    <Link href={url}> 
                        <BtnPrimary text="Compre Agora" />
                    </Link> 
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-full opacity-10 sm:relative sm:opacity-100 sm:block min-w-[50%]">
                <Image src={src} alt={`Banner ${title}`} className="w-full h-full object-cover object-center" />
            </div>
        </div>
    )
}