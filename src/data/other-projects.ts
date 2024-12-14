import { IconType } from 'react-icons'
import { GiButtonFinger } from 'react-icons/gi'
import { IoMdSwitch } from 'react-icons/io'
import {
  MdApps,
  MdChecklist,
  MdLunchDining,
  MdOutline123,
  MdOutline360,
  MdOutlineAccountCircle,
  MdOutlineMessage,
  MdOutlineRecordVoiceOver,
  MdOutlineSettingsRemote,
  MdOutlineShoppingCart,
  MdOutlineTrendingUp,
  MdOutlineVideocam,
  MdTextRotationNone
} from 'react-icons/md'
import { TbTicTac } from 'react-icons/tb'
import { ITechnology, TECHNOLOGIES } from './technologies'

export interface IOtherProject {
  name: string
  description: string
  mainTechnologies?: ITechnology[]
  link?: string
  github?: string
  color: string
  icon: IconType
}

export const OTHER_PROJECTS: IOtherProject[] = [
  {
    name: 'Portfólio',
    description: 'Site pessoal para exibição de projetos, habilidades e experiências',
    color: 'blue',
    icon: MdOutlineAccountCircle,
    github: 'https://github.com/josejefferson/portfolio',
    link: 'https://jeffersondantas.vercel.app/',
    mainTechnologies: [TECHNOLOGIES.typescript, TECHNOLOGIES.react, TECHNOLOGIES.nextjs, TECHNOLOGIES.chakraUI]
  },
  {
    name: 'Extension Switcher',
    description: 'Extensão para Chrome que facilita ativar ou desativar outras extensões de forma rápida e eficiente',
    color: 'purple',
    icon: IoMdSwitch,
    github: 'https://github.com/josejefferson/extension-switcher/',
    link: 'https://chromewebstore.google.com/detail/extension-switcher/ehfemgcdafdheholoihflacglcighnoi',
    mainTechnologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.chrome]
  },
  {
    name: 'Kardápyo Lanches',
    description: 'Design de cardápio digital desenvolvido em diferentes linguagens',
    color: 'red',
    icon: MdLunchDining,
    github: 'https://github.com/josejefferson/kardapyo-lanches/',
    link: 'https://kardapyo-lanches.vercel.app/',
    mainTechnologies: [
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.python,
      TECHNOLOGIES.django,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.prisma
    ]
  },
  {
    name: 'Speak Meet Messages',
    description: 'Extensão para Tampermonkey que lê em voz alta as mensagens do Google Meet',
    color: 'green',
    icon: MdOutlineRecordVoiceOver,
    github: 'https://github.com/josejefferson/speak-meet-messages/',
    link: 'https://josejefferson.github.io/speak-meet-messages/',
    mainTechnologies: [TECHNOLOGIES.tampermonkey, TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript]
  },
  {
    name: 'Tic Tac Toe UP!',
    description: 'Jogo da velha online sem empates, desenvolvido com NestJS, Socket.io e React',
    github: 'https://github.com/josejefferson/tic-tac-toe-up/',
    link: 'https://tic-tac-toe-up.onrender.com/',
    color: 'blue',
    icon: TbTicTac,
    mainTechnologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.vike,
      TECHNOLOGIES.nestjs,
      TECHNOLOGIES.socketio,
      TECHNOLOGIES.chakraUI
    ]
  },
  {
    name: 'ShopScreen',
    description: 'Tela interativa para exibição de anúncios e busca de produtos em supermercados ou lojas físicas',
    color: 'yellow',
    icon: MdOutlineShoppingCart,
    github: 'https://github.com/josejefferson/shop-screen/',
    link: 'https://shop-screen.onrender.com/',
    mainTechnologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.django,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.bootstrap
    ]
  },
  {
    name: 'AmongZap',
    description: 'Chat público temático inspirado em Among Us, com integração online',
    color: 'red',
    icon: MdOutlineMessage,
    github: 'https://github.com/josejefferson/amongzap',
    link: 'https://amongzap.onrender.com/',
    mainTechnologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.sass,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.angularjs,
      TECHNOLOGIES.bootstrap,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.socketio
    ]
  },
  {
    name: 'Trend Grid',
    description:
      'Painel dinâmico que apresenta palavras em destaque, semelhante ao Google Trends, com animações interativas',
    color: 'pink',
    icon: MdOutlineTrendingUp,
    github: 'https://github.com/josejefferson/trend-grid',
    link: 'https://trend-grid.vercel.app/',
    mainTechnologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.bootstrap]
  },
  {
    name: 'Contador de Inscritos',
    description: 'Ferramenta em tempo real para exibir a contagem de inscritos no YouTube',
    color: 'red',
    icon: MdOutline123,
    github: 'https://github.com/josejefferson/contador-de-inscritos',
    link: 'https://josejefferson.github.io/contador-de-inscritos/',
    mainTechnologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.bootstrap,
      TECHNOLOGIES.jquery
    ]
  },
  {
    name: 'Online Screen Recorder',
    description: 'Gravador de tela online direto no navegador, sem necessidade de instalação',
    color: 'green',
    icon: MdOutlineVideocam,
    github: 'https://github.com/josejefferson/online-screen-recorder/',
    link: 'https://josejefferson.github.io/online-screen-recorder/',
    mainTechnologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.bootstrap]
  },
  {
    name: 'Site 360°',
    description: 'Site interativo que permite navegação panorâmica usando o sensor de movimento do celular',
    color: 'blue',
    icon: MdOutline360,
    github: 'https://github.com/josejefferson/site-360',
    link: 'https://josejefferson.github.io/site-360/',
    mainTechnologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.bootstrap]
  },
  {
    name: 'Passa Slides',
    description:
      'Aplicação em Python que permite controlar apresentações de slides do computador através do celular remotamente',
    color: 'gray',
    icon: MdOutlineSettingsRemote,
    github: 'https://github.com/josejefferson/passa-slides',
    mainTechnologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.socketio,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.bootstrap
    ]
  },
  {
    name: 'To-do List Frontend Frameworks',
    description:
      'To-do List comparativa, criada em diferentes frameworks front-end para avaliar desempenho e usabilidade',
    color: 'teal',
    icon: MdChecklist,
    github: 'https://github.com/josejefferson/todolist-frontend-frameworks',
    mainTechnologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.svelte,
      TECHNOLOGIES.angular,
      TECHNOLOGIES.solid,
      TECHNOLOGIES.vue,
      TECHNOLOGIES.preact,
      TECHNOLOGIES.qwik
    ]
  },
  {
    name: 'Aperte Primeiro',
    description: 'Jogo inspirado no "Passa ou Repassa", simulando botões e sirenes com celulares ou computadores',
    color: 'green',
    icon: GiButtonFinger,
    github: 'https://github.com/josejefferson/aperte-primeiro',
    link: 'https://aperte-primeiro.onrender.com/',
    mainTechnologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.sass,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.socketio,
      TECHNOLOGIES.nodejs
    ]
  },
  {
    name: 'JD Visitor Counter',
    description: 'Contador de visitantes customizável para GitHub e páginas web',
    color: 'orange',
    icon: MdOutline123,
    github: 'https://github.com/josejefferson/jd-visitor-counter/',
    link: 'https://jd-visitor-counter.onrender.com/',
    mainTechnologies: [TECHNOLOGIES.socketio, TECHNOLOGIES.nodejs]
  },
  {
    name: 'Sliding Text',
    description: 'Painel que exibe textos com animação de texto deslizante personalizável',
    color: 'purple',
    icon: MdTextRotationNone,
    github: 'https://github.com/josejefferson/sliding-text',
    link: 'https://josejefferson.github.io/sliding-text/',
    mainTechnologies: [TECHNOLOGIES.html, TECHNOLOGIES.sass, TECHNOLOGIES.javascript]
  },
  {
    name: 'Press the Button',
    description: 'Aplicação interativa que registra e exibe em tempo real a quantidade de cliques em um botão',
    color: 'red',
    icon: GiButtonFinger,
    github: 'https://github.com/josejefferson/press-the-button',
    mainTechnologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.socketio,
      TECHNOLOGIES.nodejs
    ]
  },
  {
    name: 'Browser Startpage Generator',
    description: 'Ferramenta para criar páginas iniciais de navegador personalizadas com links e atalhos preferidos',
    color: 'blue',
    icon: MdApps,
    github: 'https://github.com/josejefferson/browser-startpage-generator',
    link: 'https://josejefferson.github.io/browser-startpage-generator/',
    mainTechnologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.jquery,
      TECHNOLOGIES.bootstrap
    ]
  }
]
