import { ITechnology, TECHNOLOGIES } from './technologies'

export interface ISkillCategory {
  title: string
  color: string
  items: ISkill[]
}

export interface ISkill {
  technology: ITechnology
}

export const SKILLS: ISkillCategory[] = [
  {
    title: 'Linguagens',
    color: 'blue',
    items: [
      { technology: TECHNOLOGIES.typescript },
      { technology: TECHNOLOGIES.javascript },
      { technology: TECHNOLOGIES.html },
      { technology: TECHNOLOGIES.css },
      { technology: TECHNOLOGIES.sass },
      { technology: TECHNOLOGIES.python }
    ]
  },
  {
    title: 'Frameworks e bibliotecas',
    color: 'red',
    items: [
      { technology: TECHNOLOGIES.react },
      { technology: TECHNOLOGIES.nextjs },
      { technology: TECHNOLOGIES.nestjs },
      { technology: TECHNOLOGIES.svelte },
      { technology: TECHNOLOGIES.angular },
      { technology: TECHNOLOGIES.angularjs },
      { technology: TECHNOLOGIES.express },
      { technology: TECHNOLOGIES.socketio },
      { technology: TECHNOLOGIES.prisma },
      { technology: TECHNOLOGIES.bootstrap }
    ]
  },
  {
    title: 'Ferramentas',
    color: 'green',
    items: [
      { technology: TECHNOLOGIES.nodejs },
      { technology: TECHNOLOGIES.bun },
      { technology: TECHNOLOGIES.vscode },
      { technology: TECHNOLOGIES.git },
      { technology: TECHNOLOGIES.github },
      { technology: TECHNOLOGIES.mongodb },
      { technology: TECHNOLOGIES.postgresql },
      { technology: TECHNOLOGIES.yarn },
      { technology: TECHNOLOGIES.npm },
      { technology: TECHNOLOGIES.figma }
    ]
  }
]
