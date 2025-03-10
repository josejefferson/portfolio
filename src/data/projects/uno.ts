import jogoImg from '../../assets/images/projects/uno/uno-jogo.webp'
import lobbyImg from '../../assets/images/projects/uno/uno-lobby.webp'
import salasImg from '../../assets/images/projects/uno/uno-salas.gif'
import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const UNO: IProject = {
  id: 'uno',
  name: 'UNO',
  github: 'https://github.com/josejefferson/uno-angular',
  link: 'https://uunnoo.vercel.app/',
  badges: [BADGES.openSource, BADGES.development],
  description: 'Implementação do jogo UNO, criando utilizando Angular, Express.js e Socket.IO.',
  images: [jogoImg, lobbyImg, salasImg],
  technologies: [
    TECHNOLOGIES.angular,
    TECHNOLOGIES.tailwind,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.express,
    TECHNOLOGIES.socketio,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css
  ],
  detailImages: [
    {
      title: 'Salas',
      description:
        'Nesta tela, você encontrará as salas públicas disponíveis no jogo. Cada sala tem uma capacidade máxima de ' +
        'jogadores.',
      src: salasImg
    },
    {
      title: 'Lobby',
      description:
        'Ao entrar em uma sala, você verá os avatares dos jogadores presentes, juntamente com a pontuação de cada ' +
        'um. Haverá um botão "Iniciar jogo" disponível para começar quando todos estiverem prontos.',
      src: lobbyImg
    },
    {
      title: 'Jogo',
      description:
        'Durante o jogo, os avatares dos jogadores estarão dispostos ao redor de uma mesa virtual. Na mesa, você ' +
        'encontrará o baralho, um botão para chamar "UNO" quando necessário, e o monte de descarte. Além disso, será exibido quem está na vez e a direção do jogo, garantindo uma experiência mais fluida e imersiva.',
      src: jogoImg
    }
  ]
}
