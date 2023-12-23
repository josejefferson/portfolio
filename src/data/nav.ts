import { sectionIDs } from '#/components/sections'

export interface INavigation {
  name: string
  href: string
}

export const NAVIGATION: INavigation[] = [
  {
    name: 'Sobre mim',
    href: `#${sectionIDs.about}`
  },
  {
    name: 'Linguagens',
    href: `#${sectionIDs.languages}`
  },
  {
    name: 'Habilidades',
    href: `#${sectionIDs.skills}`
  },
  {
    name: 'Formação',
    href: `#${sectionIDs.education}`
  },
  {
    name: 'Projetos',
    href: `#${sectionIDs.mainProjects}`
  },
  {
    name: 'Contato',
    href: `#${sectionIDs.contact}`
  }
]
