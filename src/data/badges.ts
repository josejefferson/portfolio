import { IconType } from 'react-icons'
import { MdCode, MdHourglassTop, MdLock } from 'react-icons/md'

export interface IBadge {
  color: string
  icon: IconType
  text: string
  tip?: string
}

export const BADGES = {
  development: {
    text: 'Em desenvolvimento',
    icon: MdHourglassTop,
    color: 'orange',
    tip: 'O projeto ainda não foi finalizado'
  },
  opensource: {
    text: 'Open source',
    icon: MdCode,
    color: 'green',
    tip: 'O código fonte do projeto está disponível publicamente'
  },
  private: {
    text: 'Privado',
    icon: MdLock,
    color: 'gray',
    tip: 'Este projeto não está disponível ao público geral'
  }
} satisfies Record<string, IBadge>
