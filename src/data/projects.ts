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
    id: 'vagazero',
    name: 'VagaZero',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    images: ['https://picsum.photos/id/0/1280/720', 'https://picsum.photos/id/1/1280/720'],
    mainTechnologies: [
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.express,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.yarn,
      TECHNOLOGIES.chakraUI,
      TECHNOLOGIES.docker
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
    badges: [BADGES.private]
  },
  {
    name: 'Chatbot do IFPB Campus Picuí',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    images: ['https://picsum.photos/id/2/1280/720'],
    technologies: [TECHNOLOGIES.javascript]
  },
  {
    name: 'Lampys LojaWeb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    images: ['https://picsum.photos/id/3/1280/720'],
    technologies: [TECHNOLOGIES.javascript],
    badges: [BADGES.private]
  },
  {
    id: 'cranio',
    name: 'Crânio',
    description:
      'O "Crânio" é um sistema de mural de avisos eletrônicos desenvolvido especificamente para o IFPB. Além de servir como um mural informativo, o Crânio oferece aos alunos a oportunidade de participar de um jogo de perguntas integrado, onde podem responder às questões e, a critério do professor, ter a chance de ganhar recompensas.\n\nEste projeto foi concebido por um professor do campus com a ideia de executá-lo em uma Raspberry Pi, conectada a um monitor e um teclado numérico. Isso permite que os alunos visualizem os avisos no mural e interajam facilmente com o jogo de perguntas. Quando um aluno responde a uma pergunta corretamente, o sistema envia automaticamente um e-mail ao professor notificando-o da resposta correta.',
    images: ['https://picsum.photos/id/4/1280/720'],
    github: 'https://github.com/josejefferson/cranio',
    link: 'https://cranio-dev.vercel.app/',
    technologies: [
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.nodejs
    ],
    badges: [BADGES.opensource],
    concepts: [
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa,
      CONCEPTS.frontend,
      CONCEPTS.pwa
    ],
    detailImages: [
      {
        src: 'https://picsum.photos/id/2/1280/720',
        title: 'Página inicial',
        description: 'Lorem\n\n ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: []
      },
      {
        src: 'https://picsum.photos/id/2/1280/720',
        title: 'Desafios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: [TECHNOLOGIES.javascript]
      },
      {
        src: 'https://picsum.photos/id/2/1280/720',
        title: 'Administração / Anúncios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: [TECHNOLOGIES.javascript]
      },
      {
        src: 'https://picsum.photos/id/2/1280/720',
        title: 'Administração / Desafios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: [TECHNOLOGIES.javascript]
      }
    ]
  }
]
