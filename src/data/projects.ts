import { BADGES, IBadge } from './badges'
import { CONCEPTS, IConcept } from './concepts'
import { ITechnology, TECHNOLOGIES } from './technologies'

export interface IProject {
  id?: string
  name: string
  description: string
  images: string[]
  mainTechnologies?: ITechnology[]
  technologies: ITechnology[]
  link?: string
  github?: string
  badges?: IBadge[]
  concepts?: IConcept[]
  detailImages?: {
    src: string
    title: string
    description?: string
    technologies?: ITechnology[]
  }[]
}

export const PROJECTS: IProject[] = [
  {
    name: 'VagaZero',
    description:
      'VagaZero é uma plataforma desenvolvida especialmente para facilitar o controle de presença e o remanejamento de aulas dos professores do IFPB. No site, os professores podem registrar suas faltas de forma rápida e prática, além de selecionar os horários livres disponíveis para ministrar as aulas pendentes. Além disso, os coordenadores têm acesso ao registro de faltas, permitindo uma gestão mais eficiente e transparente do quadro de docentes.',
    images: ['https://picsum.photos/id/0/1280/720', 'https://picsum.photos/id/1/1280/720'],
    mainTechnologies: [
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.express,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.chakraUI
    ],
    technologies: [
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.github,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.yarn,
      TECHNOLOGIES.eslint,
      TECHNOLOGIES.prettier,
      TECHNOLOGIES.git,
      TECHNOLOGIES.axios,
      TECHNOLOGIES.bcrypt,
      TECHNOLOGIES.chakraUI,
      TECHNOLOGIES.dayJS,
      TECHNOLOGIES.express,
      TECHNOLOGIES.formik,
      TECHNOLOGIES.jotai,
      TECHNOLOGIES.jwt,
      TECHNOLOGIES.nodemailer,
      TECHNOLOGIES.prisma,
      TECHNOLOGIES.reactEmail,
      TECHNOLOGIES.reactIcons
    ],
    badges: [BADGES.production, BADGES.private]
  },
  {
    name: 'Chatbot do IFPB Campus Picuí',
    description:
      'O chatbot foi criado para suprir as demandas de dúvidas dos alunos e responsáveis do IFPB, visando oferecer suporte através de múltiplas plataformas, como WhatsApp, Telegram e pelo site. Utilizando a plataforma Dialogflow, o bot identifica as intenções dos usuários, garantindo respostas precisas e relevantes para suas perguntas.',
    images: ['https://picsum.photos/id/2/1280/720'],
    link: 'https://chatbot.ifpb.edu.br/',
    technologies: [
      TECHNOLOGIES.dialogflow,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.express,
      TECHNOLOGIES.react,
      TECHNOLOGIES.chakraUI
    ],
    badges: [BADGES.development]
  },
  {
    name: 'Lampys LojaWeb',
    description:
      'É uma solução paga para pequenos comerciantes que desejam criar suas lojas virtuais. Com uma variedade de recursos intuitivos, permite que os comerciantes cadastrem produtos, personalizem banners e gerenciem inventários com facilidade. As compras realizadas pelos usuários são redirecionadas ao WhatsApp e gerenciadas pelo comerciante.',
    images: ['https://picsum.photos/id/3/1280/720'],
    link: 'https://loja1.lampys.com.br/',
    technologies: [
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.express,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.chakraUI,
      TECHNOLOGIES.materialUI,
      TECHNOLOGIES.reactAdmin
    ],
    badges: [BADGES.production]
  },
  {
    name: 'Crânio',
    description:
      'O "Crânio" é um sistema de mural de avisos eletrônicos desenvolvido especificamente para o IFPB. Além de servir como um mural informativo, o Crânio oferece aos alunos a oportunidade de participar de um jogo de perguntas integrado, onde podem responder às questões e, a critério do professor, ter a chance de ganhar recompensas.\n\nEste projeto foi concebido por um professor do campus com a ideia de executá-lo em uma Raspberry Pi, conectada a um monitor e um teclado numérico. Isso permite que os alunos visualizem os avisos no mural e interajam facilmente com o jogo de perguntas. Quando um aluno responde a uma pergunta corretamente, o sistema envia automaticamente um e-mail ao professor notificando-o da resposta correta.',
    images: ['https://picsum.photos/id/4/1280/720'],
    github: 'https://github.com/josejefferson/cranio',
    link: 'https://cranio-dev.vercel.app/',
    technologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.bootstrap,
      TECHNOLOGIES.chakraUI,
      TECHNOLOGIES.ejs
    ],
    badges: [BADGES.openSource]
  }
]
