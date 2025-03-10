import telegramSitesImg from '../../assets/images/projects/chatbot/chatbot-telegram-sites.webp'
import webCursosImg from '../../assets/images/projects/chatbot/chatbot-web-cursos.webp'
import webInscricaoImg from '../../assets/images/projects/chatbot/chatbot-web-inscricao.webp'
import webOiImg from '../../assets/images/projects/chatbot/chatbot-web-oi.webp'
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
  images: [webOiImg, telegramSitesImg, webCursosImg],
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
    { title: 'Tela Inicial do Site', src: webOiImg },
    { title: 'Chatbot no Telegram', src: telegramSitesImg },
    { title: 'Perguntas ao Chatbot', src: webCursosImg },
    { title: 'Fluxo de Conversa', src: webInscricaoImg }
  ]
}
