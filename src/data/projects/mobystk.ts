import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const MOBYSTK: IProject = {
  id: 'mobystk',
  name: 'MobyStk',
  github: 'https://github.com/josejefferson/mobystk',
  badges: [BADGES.openSource],
  description:
    'Transforme seu Smartphone em um Gamepad para o PC. Com o MobyStk, seu smartphone se converte em um gamepad ' +
    'versátil e personalizável, oferecendo uma alternativa útil para aqueles que não possuem um controle físico ' +
    'para PC.',
  images: [
    '/img/projects/mobystk-controle.webp',
    '/img/projects/mobystk-configuracoes.webp',
    '/img/projects/mobystk-server.webp'
  ],
  technologies: [
    TECHNOLOGIES.python,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.esbuild
  ],
  detailImages: [
    {
      title: 'Controle',
      description:
        'O controle do MobyStk possui setas direcionais, joystick, botões de ação, gatilhos, botões de volume e ' +
        'funções para salvar, carregar e pausar o jogo. Nas configurações, é possível ocultar qualquer um desses ' +
        'botões. Futuramente, será possível personalizar o tamanho e a posição dos botões, além de adicionar novos ' +
        'botões conforme necessário.',
      src: '/img/projects/mobystk-controle.webp',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.typescript, TECHNOLOGIES.esbuild]
    },
    {
      title: 'Layouts',
      description:
        'O MobyStk inclui layouts predefinidos para PSP, PS2 e SNES. É possível alternar entre esses layouts nas ' +
        'configurações.',
      src: '/img/projects/mobystk-layouts.gif',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.typescript, TECHNOLOGIES.esbuild]
    },
    {
      title: 'Suporte a múltiplos toques',
      description: 'O MobyStk foi projetado para reconhecer múltiplos toques simultâneos.',
      src: '/img/projects/mobystk-multi-touch.gif',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.typescript, TECHNOLOGIES.esbuild]
    },
    {
      title: 'Configurações',
      description:
        'Nas configurações do MobyStk, é possível selecionar o número do controle, escolher o layout, configurar ' +
        'comportamentos do controle, ocultar botões, aplicar temas e muito mais.',
      src: '/img/projects/mobystk-configuracoes.webp',
      technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.typescript, TECHNOLOGIES.esbuild]
    },
    {
      title: 'Aplicação do computador',
      description:
        'O aplicativo do MobyStk, desenvolvido em Python, é fácil de instalar e oferece uma interface intuitiva.',
      src: '/img/projects/mobystk-server.webp',
      technologies: [TECHNOLOGIES.python]
    }
  ]
}
