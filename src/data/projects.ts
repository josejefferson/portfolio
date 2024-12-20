import { IBadge } from './badges'
import { IConcept } from './concepts'
import { CHATBOT } from './projects/chatbot'
import { CRANIO } from './projects/cranio'
import { IFPB_LIVES } from './projects/ifpb-lives'
import { LAMPYS } from './projects/lampys'
import { MOBYSTK } from './projects/mobystk'
import { SPEAK_MEET_MESSAGES } from './projects/speak-meet-messages'
import { UNO } from './projects/uno'
import { VAGAZERO } from './projects/vagazero'
import { WEDDYTOR } from './projects/weddytor'
import { ITechnology } from './technologies'

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
  VAGAZERO,
  CHATBOT,
  LAMPYS,
  CRANIO,
  IFPB_LIVES,
  SPEAK_MEET_MESSAGES,
  MOBYSTK,
  WEDDYTOR,
  UNO
]
