import Link from "next/link";

interface PageAboutProps {

}
export function PageAbout(props : PageAboutProps){
    return(
        <div className="p-6 flex flex-col gap-4 text-lg">
        <h2 className=" text-2xl font-bold">
        MyShop: Uma experiência de E-commerce Minimalista
        </h2>
        <p>
        Bem-vindo(a) ao MyShop, o projeto de E-commerce desenvolvido pelo Analista de Sistemas - Kleuton Novais. Com foco exclusivo nos produtos oferece uma experiência única e minimalista para a melhor usabilidade ao usuário, o MyShop foi desenvolvido com a mais atual tecnologia, feito como Next.js na versão 13.4.10, TypeScript, Tailwind e uma API fake para o backend dos produtos.
        </p>
        <p>
        Com um design limpo e elegante, nosso objetivo é colocar os produtos em destaque, permitindo que você se concentre no que realmente importa: encontrar os itens que deseja. Vamos dar uma olhada em algumas das principais características que tornam o MyShop uma escolha excepcional para suas compras online
        </p>
        <ol className="list-decimal">
            <li>
                <b>Conexão Gateway de Pagamento Strapi:</b> MyShop conta com uma integração poderosa com a API Strapi para facilitar os processos de pagamento. A API Strapi é uma solução robusta que oferece um ambiente seguro para gerenciar transações financeiras, garantindo uma experiência suave e confiável para nossos clientes.
            </li>
            <li>
                <b>Rotas e Navegação:</b> O MyShop utiliza o poder do Next.js para criar um sistema de roteamento eficiente. Isso permite uma transição perfeita entre as diferentes páginas, garantindo uma experiência de navegação fluida e rápida.
            </li>

            <li>
                <b>Estados e Contextos com Hooks: </b> Aproveitamos a flexibilidade do React (useState, useContext) para gerenciar o estado dos componentes com Hooks. Isso possibilita uma atualização dinâmica da interface conforme você interage com os produtos e o carrinho de compras.
            </li>
            <li>
                <b>Página Inicial Atraente: </b> Ao acessar a página inicial do MyShop, você será recebido(a) com uma imagem cativante, destacando as principais categorias de produtos disponíveis. É uma forma de apresentar uma visão geral do que temos a oferecer e facilitar a localização dos itens que você procura.
            </li>
            <li>
                <b>Banners e Carrossel de Produtos em Tendência: </b> Mantenha-se atualizado(a) com os produtos mais populares do momento, apresentados em banners e um carrossel de produtos em tendência na página inicial.
            </li>
            <li>
                <b>Página de Categorias:</b> Se você deseja explorar todas as categorias disponíveis, nossa página dedicada às categorias permite uma visão detalhada de todas as opções, facilitando sua escolha.
            </li>
            <li>
                <b>Página de Produtos:</b> Ao clicar em um produto específico, você será direcionado(a) para sua página exclusiva. Lá, você encontrará fotos e todos os detalhes do produto, juntamente com botões de ação para compra e adição ao carrinho.
            </li>
            <li>
                <b>Carrinho de Compras Inteligente:</b> Nosso sistema de carrinho de compras é projetado para simplificar o processo de compra. Usando um modal interativo, você pode visualizar e gerenciar os produtos no seu carrinho antes de finalizar a compra. Uso do LocalStorage para tornar a experiência do usuário ainda mais fluida.
                Isso permite que o usuário retome suas compras facilmente, mesmo que saia e volte mais tarde.
            </li>
        </ol>

        <p>
        O MyShop é mais do que apenas um E-commerce, é uma jornada de compras agradável e descomplicada, criada com carinho e muito esforça pelo Analista de Sistemas - Kleuton Novais. Feito para oferecer a melhor experiência possível.
        </p>
        <p>
        Então, o que você está esperando? Explore o MyShop agora mesmo.
        Há, não se esqueça vá em meu portfolio pessoa e descubra outros projetos criado pelo desenvolvedor.
        </p>
        <p> Acesse: <Link href='http://kleuton.dev' target="_blank" > https://kleuton.dev/ </Link> </p>
        </div>
    )
}