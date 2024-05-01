import { IconType } from 'react-icons'
import { MdCheck, MdClose, MdCode, MdHourglassTop, MdLock, MdWarning } from 'react-icons/md'

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
  production: {
    text: 'Em produção',
    icon: MdCheck,
    color: 'green',
    tip: 'O projeto já está sendo utilizado'
  },
  openSource: {
    text: 'Open source',
    icon: MdCode,
    color: 'blue',
    tip: 'O código fonte do projeto está disponível publicamente'
  },
  private: {
    text: 'Privado',
    icon: MdLock,
    color: 'gray',
    tip: 'Este projeto não está disponível ao público geral'
  }
} satisfies Record<string, IBadge>
