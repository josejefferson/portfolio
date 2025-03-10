import { StaticImageData } from 'next/image'
import { IBadge } from './badges'
import { IConcept } from './concepts'
import { CHATBOT } from './projects/chatbot'
import { CRANIO } from './projects/cranio'
import { IFPB_LIVES } from './projects/ifpb-lives'
import { LAMPYS } from './projects/lampys'
import { MOBYSTK } from './projects/mobystk'
import { SPEAK_MEET_MESSAGES } from './projects/speak-meet-messages'
import { TOTP } from './projects/totp'
import { UNO } from './projects/uno'
import { VAGAZERO } from './projects/vagazero'
import { WEDDYTOR } from './projects/weddytor'
import { ITechnology } from './technologies'

export interface IProject {
  id?: string
  name: string
  description: string
  images: StaticImageData[]
  mainTechnologies?: ITechnology[]
  technologies: ITechnology[]
  link?: string
  github?: string
  badges?: IBadge[]
  concepts?: IConcept[]
  detailImages?: {
    src: StaticImageData
    title: string
    description?: string
    technologies?: ITechnology[]
  }[]
}

// Ao adicionar um projeto aqui, não se esqueça de adicionar o link no arquivo "next-sitemap.config.js"
export const PROJECTS: IProject[] = [
  VAGAZERO,
  CHATBOT,
  LAMPYS,
  CRANIO,
  IFPB_LIVES,
  SPEAK_MEET_MESSAGES,
  TOTP,
  MOBYSTK,
  WEDDYTOR,
  UNO
]
