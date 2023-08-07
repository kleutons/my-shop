const source = [
    {
         title: 'Tive um probela com meu acesso',
         details: 'Lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore lorem. Ut enim ad minim veniam,lorem ipsum dolor sit amet, consectet tempor incididunt ut labore lorem. Ut enim ad minim veniam,quis nostrud ex ea commodo consequat et white'
    },
    {
        title: 'Minha Compra Falhou',
        details: 'Lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore lorem. Ut enim ad minim veniam,quis nostrud lorem ips tempor incididunt ut labore lorem. Ut enim ad minim veniam,quis nostrud ex ea commod'
   },
   {
    title: 'Como devolver o meu Produto?',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
]
export function PageFaq(){
    return(
        <div className="p-6 flex flex-col gap-4 text-lg ">
        
        <p>
        Bem-vindo(a) ao MyShop, exemplo de um FAQ abaixo:
        </p>

        <div className=" select-none [&>details>summary]:pt-2 [&>details>summary]:cursor-pointer [&>details>summary]:py-3">
            {source.map((item,i) => (
                <details key={`Details${i}`}>
                    <summary>{item.title}</summary>
                    {item.details}
                </details>
            ))}
            

            
        </div>
        </div>
    )
}