export interface ICompetence {
  name: string
  description?: string
}

export const COMPETENCES: ICompetence[] = [
  { name: 'APIs' },
  { name: 'Autenticação' },
  { name: 'Back-end' },
  { name: 'Bancos de dados relacionais e não-relacionais' },
  { name: 'Criptografia' },
  { name: 'Front-end' },
  { name: 'Gerenciamento de versão' },
  { name: 'JWT', description: 'JSON Web Token' },
  { name: 'PWA', description: 'Progressive Web App' },
  { name: 'Responsividade' },
  { name: 'SEO', description: 'Search Engine Optimization' },
  { name: 'SSE', description: 'Server Sent Events' },
  { name: 'SSR', description: 'Server Side Rendering' },
  { name: 'Testes unitários' },
  { name: 'Validação de dados' },
  { name: 'WebSocket' }
]
