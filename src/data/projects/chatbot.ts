import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const CHATBOT: IProject = {
  id: 'chatbot',
  name: 'Chatbot do IFPB Campus Picuí',
  badges: [BADGES.development],
  link: 'https://chatbot.ifpb.edu.br/',
  description:
    'O chatbot foi criado para suprir as demandas de dúvidas dos alunos e responsáveis do IFPB, visando oferecer ' +
    'suporte através de múltiplas plataformas, como WhatsApp, Telegram e pelo site. Utilizando a plataforma ' +
    'Dialogflow, o bot identifica as intenções dos usuários, garantindo respostas precisas e relevantes para suas ' +
    'perguntas.',
  images: [
    '/img/projects/chatbot-web-oi.webp',
    '/img/projects/chatbot-telegram-sites.webp',
    '/img/projects/chatbot-web-cursos.webp'
  ],
  technologies: [
    TECHNOLOGIES.dialogflow,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.mongodb,
    TECHNOLOGIES.express,
    TECHNOLOGIES.react,
    TECHNOLOGIES.chakraUI
  ],
  detailImages: [
    {
      title: 'Tela Inicial do Site',
      src: '/img/projects/chatbot-web-oi.webp'
    },
    {
      title: 'Chatbot no Telegram',
      src: '/img/projects/chatbot-telegram-sites.webp'
    },
    {
      title: 'Perguntas ao Chatbot',
      src: '/img/projects/chatbot-web-cursos.webp'
    },
    {
      title: 'Fluxo de Conversa',
      src: '/img/projects/chatbot-web-inscricao.webp'
    }
  ]
}
