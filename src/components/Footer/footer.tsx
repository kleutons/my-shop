import { SvgFace } from "@/assets/icons/face";
import { SvgGithub } from "@/assets/icons/github";
import { SvgHeard } from "@/assets/icons/heart";
import { SvgLink } from "@/assets/icons/link";
import { SvgLinkedin } from "@/assets/icons/linkedin";
import Link from "next/link";


const menuFooter = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Sobre",
        link: "/about"
    },
    {
        name: "Política de Privacidade",
        link: "/policy"
    },
    {
        name: "FAQ Dúvidas Frequentes",
        link: "/faq"
    },
    {
        name: "Contato",
        link: "/contact"
    }
]

export function Footer(){
    return(
        <footer className="w-full mt-8  ">
            <div className="bg-[#191919] min-h-[260px] py-12 sm:py-0 text-white flex items-center">
                <div className="mx-auto container flex flex-col sm:flex-row justify-around gap-6">
                    <div className="flex flex-col text-center justify-center gap-6">
                        <h2 className="text-3xl font-bold">Receba Novidades</h2>
                        <div className="flex text-center justify-center gap-3">
                            <input className="p-2 text-black " type="text" placeholder="seu@email.com" />
                            <button className="bg-white/30 text-white hover:bg-white/50 p-2 transition-colors duration-500">Se Inscreva</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-3xl font-bold">Siga-nos!</h2>
                        <div className="flex gap-3 justify-center">
                            <button className="text-white/70 hover:text-white">
                                <SvgFace size={40} />
                            </button>
                            <button className="text-white/70 hover:text-white">
                                <SvgLinkedin size={36} />
                            </button>
                            <button className="text-white/70 hover:text-white">
                                <SvgGithub size={40} />
                            </button>
                            <button className="text-white/70 hover:text-white">
                                <SvgLink size={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-black text-white">
                <div className="mx-auto container min-h-[180px] flex flex-col justify-center text-center items-center">
                    
                        <nav>
                            <ul className="flex flex-wrap gap-6 pt-8 sm:pt-0 items-center justify-center">
                                {menuFooter.map(menu => {
                                    return(
                                        <li className="text-md whitespace-nowrap subline" key={menu.name}>
                                            <Link href={menu.link}>
                                                {menu.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <div className="mt-8"> © 2023 - Made with 💙 by Kleuton Novais</div>
                    
                </div>
            </div>
        </footer>
    )
}