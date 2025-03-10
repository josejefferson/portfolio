import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const SPEAK_MEET_MESSAGES: IProject = {
  id: 'speak-meet-messages',
  name: 'Escutar mensagens do Meet',
  github: 'https://github.com/josejefferson/speak-meet-messages',
  link: 'https://josejefferson.github.io/speak-meet-messages/',
  badges: [BADGES.openSource, BADGES.archived],
  description:
    'Monitore o chat do Google Meet enquanto apresenta a tela. Com esta extensão, você ouve as novas mensagens em ' +
    'voz alta, sem precisar alternar para a tela do Meet.',
  images: [
    '/img/projects/speak-meet-messages/speak-meet-messages-botao.webp',
    '/img/projects/speak-meet-messages/speak-meet-messages-opcoes.webp'
  ],
  technologies: [TECHNOLOGIES.tampermonkey, TECHNOLOGIES.javascript, TECHNOLOGIES.css, TECHNOLOGIES.html],
  detailImages: [
    {
      title: 'Botão para ativar/desativar voz',
      description:
        'Na barra de ferramentas do Google Meet, foi adicionado um botão que permite ativar ou desativar a leitura ' +
        'em voz alta das mensagens.',
      src: '/img/projects/speak-meet-messages/speak-meet-messages-botao.webp',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript]
    },
    {
      title: 'Opções',
      description:
        'Clicando com o botão direito do mouse sobre o botão, é possível configurar as opções da ' +
        'extensão. É viável personalizar a leitura das mensagens em voz alta, escolher a voz preferida, adicionar um ' +
        'texto introdutório para facilitar o reconhecimento das mensagens, configurar a exibição do nome do ' +
        'remetente e ajustar a velocidade da fala conforme a preferência. Além disso, é possível definir o ' +
        'comportamento da extensão durante o Google Meet para evitar interferências nas reuniões.',
      src: '/img/projects/speak-meet-messages/speak-meet-messages-opcoes.webp',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript]
    }
  ]
}
