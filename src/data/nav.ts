import { SECTION_IDS } from '#/components/sections'

export interface INavigation {
  name: string
  href: string
}

export const NAVIGATION: INavigation[] = [
  {
    name: 'Sobre mim',
    href: `#${SECTION_IDS.about}`
  },
  {
    name: 'Linguagens',
    href: `#${SECTION_IDS.languages}`
  },
  {
    name: 'Habilidades',
    href: `#${SECTION_IDS.skills}`
  },
  {
    name: 'Formação',
    href: `#${SECTION_IDS.education}`
  },
  {
    name: 'Projetos',
    href: `#${SECTION_IDS.mainProjects}`
  },
  {
    name: 'Contato',
    href: `#${SECTION_IDS.contact}`
  }
]
