import { ITechnology, TECHNOLOGIES } from './technologies'

export interface ISkillCategory {
  title: string
  color: string
  items: ISkill[]
}

export interface ISkill {
  technology: ITechnology
  skill: number
}

export const SKILLS: ISkillCategory[] = [
  {
    title: 'Linguagens',
    color: 'blue',
    items: [
      { technology: TECHNOLOGIES.typescript, skill: 80 },
      { technology: TECHNOLOGIES.javascript, skill: 90 },
      { technology: TECHNOLOGIES.html, skill: 100 },
      { technology: TECHNOLOGIES.css, skill: 95 },
      { technology: TECHNOLOGIES.sass, skill: 40 },
      { technology: TECHNOLOGIES.python, skill: 60 }
    ]
  },
  {
    title: 'Frameworks e bibliotecas',
    color: 'red',
    items: [
      { technology: TECHNOLOGIES.react, skill: 90 },
      { technology: TECHNOLOGIES.nextjs, skill: 95 },
      { technology: TECHNOLOGIES.svelte, skill: 65 },
      { technology: TECHNOLOGIES.angular, skill: 50 },
      { technology: TECHNOLOGIES.angularjs, skill: 40 },
      { technology: TECHNOLOGIES.express, skill: 95 },
      { technology: TECHNOLOGIES.socketio, skill: 90 },
      { technology: TECHNOLOGIES.prisma, skill: 85 },
      { technology: TECHNOLOGIES.bootstrap, skill: 100 }
    ]
  },
  {
    title: 'Ferramentas',
    color: 'green',
    items: [
      { technology: TECHNOLOGIES.nodejs, skill: 97 },
      { technology: TECHNOLOGIES.vscode, skill: 99 },
      { technology: TECHNOLOGIES.git, skill: 90 },
      { technology: TECHNOLOGIES.github, skill: 90 },
      { technology: TECHNOLOGIES.mongodb, skill: 80 },
      { technology: TECHNOLOGIES.postgresql, skill: 70 },
      { technology: TECHNOLOGIES.yarn, skill: 90 },
      { technology: TECHNOLOGIES.npm, skill: 85 },
      { technology: TECHNOLOGIES.figma, skill: 60 }
    ]
  }
]
