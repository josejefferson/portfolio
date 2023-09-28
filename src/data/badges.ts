import { IBadge } from '#types/badge'
import { MdCode, MdHourglassTop, MdLock } from 'react-icons/md'

export const BADGES: Record<string, IBadge> = {
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
}
