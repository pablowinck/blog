import TextContainer from "@/components/TextContainer";
import { Inter } from "next/font/google";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Home() {
  return (
    <TextContainer>
      <ReactMarkdown>
        {
          "# Desenvolvimento de uma PÁGINA com tecnologias modernas\n\n## Visão Geral\n\nEste documento tem como objetivo oferecer uma visão geral do processo de criação de uma página utilizando tecnologias modernas. Exploraremos como aproveitar ao máximo essas tecnologias para desenvolver uma experiência web de alta qualidade.\n\n## Requisitos\n\nPara acompanhar este guia, é recomendado ter um conhecimento básico das tecnologias web. Familiaridade com programação em geral também é útil, mas não obrigatória. Certifique-se de estar utilizando um navegador atualizado e ter acesso à Internet.\n\n## Iniciando\n\nO primeiro passo para iniciar é configurar o ambiente de desenvolvimento. Dependendo do tipo de projeto, você pode precisar de diferentes conjuntos de ferramentas. Certifique-se de ter tudo configurado de acordo com as suas necessidades.\n\n## Construindo a Página\n\nCom o ambiente configurado, você está pronto para começar a construção da sua página. Utilize as ferramentas e bibliotecas à sua disposição para criar uma experiência única e atraente.\n\n## Testando e Visualizando\n\nSempre teste sua página durante o processo de desenvolvimento. Isso ajudará a identificar problemas precocemente e a garantir que tudo funcione conforme o esperado. Utilize ferramentas de depuração do navegador para encontrar e corrigir erros.\n\n## Publicando em /dev-preview\n\nUma vez satisfeito com o desenvolvimento e os testes, é hora de publicar sua página na URL /dev-preview. Isso permitirá que outros visualizem a página em um ambiente de prévia e forneçam feedback valioso.\n\n## Conclusão\n\nDesenvolver uma página utilizando tecnologias modernas pode ser gratificante e desafiador. Aproveite ao máximo as ferramentas disponíveis e não hesite em buscar recursos adicionais sempre que necessário. Com prática e perseverança, você pode criar experiências web incríveis."
        }
      </ReactMarkdown>
    </TextContainer>
  );
}
