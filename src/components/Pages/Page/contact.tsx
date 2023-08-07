import { SvgGithub } from "@/assets/icons/github";
import { SvgLink } from "@/assets/icons/link";
import { SvgLinkedin } from "@/assets/icons/linkedin";
import { Btn } from "@/components/Buttons/btn";
import Link from "next/link";

export function PageContact(){
    return(
        <div className="p-6 flex flex-col md:flex-row gap-4 text-lg ">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
            <h2 className="font-bold text-xl">Entre em contato conosco:</h2> 
            <p><b>Email:</b><br /> contato.xxx@email.com</p>
            <p><b>Endereço:</b> <br/> Rua XXXX XXX , 00 Brasil <br/>CEP: xxxxx-xxx</p>
            <p><b>Telefone:</b> <br/> (00) 00000-XXXX </p>

            <div className="flex mt-6 gap-3 items-center text-gray-700">
                <Link href='https://www.linkedin.com/in/kleuton-novais/' target="_black">
                    <button className=' hover:text-cl-primary'>
                        <SvgLinkedin size={36} />
                    </button>
                </Link>
                <Link href='https://github.com/kleutons' target="_black" >
                    <button className="hover:text-cl-primary">
                        <SvgGithub size={40} />
                    </button>
                </Link>
                <Link href='https://kleuton.dev' target="_black" >
                    <button className="hover:text-cl-primary">
                        <SvgLink size={40} />
                    </button>
                </Link>
            </div>
        </div>

        <form className="flex flex-col gap-3 w-full md:w-1/2 mt-6 md:mt-0 ">
            <input className="p-4 w-full bg-gray-100  border border-gray-200 text-black/80 focus:outline-none focus:ring-2 focus:ring-cl-primary" placeholder="Nome" required />
            <input  className="p-4 w-full bg-gray-100 border border-gray-200 text-black/80 focus:outline-none focus:ring-2 focus:ring-cl-primary" type="email" placeholder="E-mail" required />
            <textarea className="bg-gray-100 text-black/80 p-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-cl-primary" placeholder="Mensagem" required />
            <Btn className="border-2 border-black uppercase hover:bg-black hover:text-white"> Enviar </Btn>
        </form>

        
        </div>
    )
}