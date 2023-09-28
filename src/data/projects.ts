import { IProject } from '#types/project'
import { BADGES } from './badges'
import { TECNOLOGIES } from './technologies'

export const PROJECTS: IProject[] = [
  {
    name: 'VagaZero',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    image: 'https://picsum.photos/id/1/1280/720',
    technologies: [TECNOLOGIES.javascript],
    badges: [BADGES.private]
  },
  {
    name: 'Chatbot do IFPB Campus Picuí',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    image: 'https://picsum.photos/id/2/1280/720',
    technologies: [TECNOLOGIES.javascript]
  },
  {
    name: 'Lampys LojaWeb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    image: 'https://picsum.photos/id/3/1280/720',
    technologies: [TECNOLOGIES.javascript],
    badges: [BADGES.private]
  },
  {
    name: 'Crânio',
    description:
      'O Crânio é uma interface para mural de avisos eletrônico. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lectus id orci auctor faucibus. Sed lobortis sit amet risus a condimentum. Pellentesque sed neque condimentum, eleifend orci a, placerat enim. Duis eu purus consectetur, pellentesque est id, condimentum elit.',
    image: 'https://picsum.photos/id/4/1280/720',
    github: 'https://github.com/josejefferson/cranio',
    link: 'https://cranio-dev.vercel.app/',
    technologies: [TECNOLOGIES.javascript],
    badges: [BADGES.opensource]
  }
]
