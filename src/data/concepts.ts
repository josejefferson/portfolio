export interface IConcept {
  name: string
  tip?: string
}

export const CONCEPTS = {
  pwa: {
    name: 'PWA',
    tip: 'Progressive Web App'
  },
  ssr: {
    name: 'SSR',
    tip: 'Server side rendering'
  },
  websocket: {
    name: 'WebSocket'
  },
  sse: {
    name: 'SSE',
    tip: 'Server sent events'
  },
  frontend: {
    name: 'Front-end'
  },
  backend: {
    name: 'Back-end'
  }
} satisfies Record<string, IConcept>
