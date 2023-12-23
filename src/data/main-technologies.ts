import { ITechnology, TECHNOLOGIES } from './technologies'

export interface IMainTechnology {
  technology: ITechnology
  cardColor: string
}

export const MAIN_TECHNOLOGIES: IMainTechnology[] = [
  { technology: TECHNOLOGIES.typescript, cardColor: 'blue' },
  { technology: TECHNOLOGIES.javascript, cardColor: 'yellow' },
  { technology: TECHNOLOGIES.nextjs, cardColor: 'purple' },
  { technology: TECHNOLOGIES.react, cardColor: 'blue' },
  { technology: TECHNOLOGIES.nodejs, cardColor: 'green' }
]
