import { Btn } from "@/components/Buttons/btn";

export function PageContact(){
    return(
        <div className="p-6 flex gap-4 text-lg ">
        <div className="flex flex-col gap-3 w-1/2">
            <h2 className="font-bold text-xl">Entre em contato conosco:</h2> 
            <p><b>Email:</b><br /> contato.xxx@email.com</p>
            <p><b>Endereço:</b> <br/> Rua XXXX XXX , 00 Brasil <br/>CEP: xxxxx-xxx</p>
            <p><b>Telefone:</b> <br/> (00) 00000-XXXX </p>
        </div>

        <form className="flex flex-col gap-3 w-1/2 ">
            <input className="p-4 w-full bg-gray-100  border border-gray-200 text-black/80 focus:outline-none focus:ring-2 focus:ring-cl-primary" placeholder="Nome" required />
            <input  className="p-4 w-full bg-gray-100 border border-gray-200 text-black/80 focus:outline-none focus:ring-2 focus:ring-cl-primary" type="email" placeholder="E-mail" required />
            <textarea className="bg-gray-100 text-black/80 p-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-cl-primary" placeholder="Mensagem" required />
            <Btn className="border-2 border-black uppercase hover:bg-black hover:text-white"> Enviar </Btn>
        </form>

        
        </div>
    )
}