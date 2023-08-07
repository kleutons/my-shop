import Image from "next/image";
import notFound from '@/assets/img/notFound.png'

export function SearchNotFound(){
    return(
        <div className="flex flex-col justify-center items-center w-full text-center" >
            <Image src={notFound} alt="Nenhum resultado foi encontrado" width={150} height={150} />
            <div className="text-lg">
                Nenhum resultado foi encontrado
            </div>
        </div>
    )
}