import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const WEDDYTOR: IProject = {
  id: 'weddytor',
  name: 'Weddytor',
  github: 'https://github.com/josejefferson/weddytor',
  link: 'https://josejefferson.github.io/weddytor/#!/',
  badges: [BADGES.openSource, BADGES.archived],
  description:
    'Desenvolva e edite seus códigos HTML no seu dispositivo móvel com o Weddytor. Aproveite as ' +
    'ferramentas de edição avançadas, sem a necessidade de downloads.',
  images: [
    '/img/projects/weddytor-destaque.webp',
    '/img/projects/weddytor-seletor-de-cores.webp',
    '/img/projects/weddytor-configuracoes.webp'
  ],
  technologies: [
    TECHNOLOGIES.framework7,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css,
    TECHNOLOGIES.javascript,
    TECHNOLOGIES.jquery
  ],
  detailImages: [
    {
      title: 'Editor de código',
      description:
        'O editor de código do Weddytor é dividido em três abas: HTML, CSS e JavaScript, permitindo uma organização ' +
        'clara e eficiente dos seus projetos. No topo, há um botão de menu para acessar diversas opções e um botão ' +
        'para adicionar bibliotecas externas. Na parte inferior, um botão permite executar o código, mostrando ' +
        'imediatamente os resultados das suas alterações.',
      src: '/img/projects/weddytor-codigo.webp'
    },
    {
      title: 'Barra de caracteres',
      description:
        'Durante a edição do código, uma barra de caracteres rápidos é exibida para facilitar a inclusão de ' +
        'caracteres comuns da linguagem, agilizando o processo de desenvolvimento.',
      src: '/img/projects/weddytor-barra-de-ferramentas.webp'
    },
    {
      title: 'Resultado',
      description:
        'A tela de resultado exibe a saída do seu código HTML, CSS e JavaScript em tempo real. O Weddytor integra as ' +
        'ferramentas de desenvolvedor Eruda, que oferecem poderosas funcionalidades de depuração, especialmente ' +
        'úteis em dispositivos móveis, permitindo uma análise detalhada do desempenho e comportamento do seu código.',
      src: '/img/projects/weddytor-resultado.webp'
    },
    {
      title: 'Gerenciador de bibliotecas',
      description:
        'O gerenciador de bibliotecas do Weddytor permite adicionar facilmente bibliotecas do cdnjs. Você pode ' +
        'pesquisar, selecionar e adicionar bibliotecas às suas favoritas, facilitando o acesso repetido e a gestão ' +
        'de dependências do seu projeto.',
      src: '/img/projects/weddytor-gerenciador-de-bibliotecas.webp'
    },
    {
      title: 'Seletor de cores',
      description:
        'Para facilitar a escolha de cores, o Weddytor inclui um seletor de cores intuitivo. Isso ajuda a garantir ' +
        'consistência e precisão nas suas paletas de cores, tornando o design mais eficiente.',
      src: '/img/projects/weddytor-seletor-de-cores.webp'
    },
    {
      title: 'Editor visual de formatação',
      description:
        'O editor visual de formatação do Weddytor permite criar código HTML de forma intuitiva, sem a necessidade ' +
        'de escrever o código manualmente. Essa ferramenta é ideal para desenvolvedores que preferem um ambiente de ' +
        'desenvolvimento visual, aumentando a produtividade e reduzindo a curva de aprendizado.',
      src: '/img/projects/weddytor-editor-de-formatacao.webp'
    },
    {
      title: 'Configurações',
      description:
        'Na página de configurações do Weddytor, você pode personalizar diversos aspectos do ambiente de ' +
        'desenvolvimento, como o tamanho da fonte, o tema (incluindo a opção de tema escuro) e outras preferências. ' +
        'Isso permite adaptar o Weddytor às suas necessidades específicas, proporcionando uma experiência de usuário ' +
        'otimizada.',
      src: '/img/projects/weddytor-configuracoes.webp'
    }
  ]
}
