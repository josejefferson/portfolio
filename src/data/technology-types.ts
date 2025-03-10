export interface ITechnologyType {
  name: string
  namePlural: string
}

export const TECHNOLOGY_TYPES = {
  platform: {
    name: 'Plataforma',
    namePlural: 'Plataformas'
  },
  language: {
    name: 'Linguagem',
    namePlural: 'Linguagens'
  },
  framework: {
    name: 'Framework',
    namePlural: 'Frameworks'
  },
  database: {
    name: 'Banco de dados',
    namePlural: 'Bancos de dados'
  },
  tool: {
    name: 'Ferramenta',
    namePlural: 'Ferramentas'
  },
  application: {
    name: 'Aplicação',
    namePlural: 'Aplicações'
  },
  library: {
    name: 'Biblioteca',
    namePlural: 'Bibliotecas'
  }
} satisfies Record<string, ITechnologyType>
