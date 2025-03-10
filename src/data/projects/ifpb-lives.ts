import administracaoImg from '../../assets/images/projects/ifpblives/ifpblives-administracao.webp'
import opcoesImg from '../../assets/images/projects/ifpblives/ifpblives-opcoes.webp'
import telaInicialImg from '../../assets/images/projects/ifpblives/ifpblives-tela-inicial.webp'
import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const IFPB_LIVES: IProject = {
  id: 'ifpb-lives',
  name: 'Lives do IFPB',
  github: 'https://github.com/josejefferson/ifpblives',
  link: 'https://ifpblives.vercel.app/',
  badges: [BADGES.openSource, BADGES.archived],
  description:
    'Em resposta à pandemia, o IFPB começou a oferecer transmissões ao vivo abordando uma variedade de disciplinas, ' +
    'cujos links eram dispersos em grupos de WhatsApp. Para solucionar essa desorganização, desenvolvi o "Lives do ' +
    'IFPB", um site que centraliza e organiza essas aulas. Com um sistema de cadastro integrado, os usuários podem ' +
    'receber notificações automáticas sempre que novas transmissões estiverem disponíveis, garantindo acesso fácil ' +
    'e oportuno ao conteúdo educacional oferecido pela instituição durante esse período desafiador.',
  images: [telaInicialImg, administracaoImg],
  technologies: [
    TECHNOLOGIES.javascript,
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.express,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css,
    TECHNOLOGIES.bootstrap
  ],
  detailImages: [
    {
      title: 'Página inicial',
      description:
        'No lado esquerdo, há uma tabela com a lista de lives, incluindo a disciplina, data e assunto. Cada live ' +
        'possui uma caixa de seleção para que os alunos possam marcar as aulas já assistidas. Além disso, há um ' +
        'botão para filtrar a lista por disciplina. No lado direito, está o cronograma das aulas e algumas ' +
        'observações adicionais.',
      src: telaInicialImg,
      technologies: [TECHNOLOGIES.bootstrap, TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript]
    },
    {
      title: 'Administração',
      description: 'Na tela de administração, os professores têm a capacidade de adicionar novas aulas.',
      src: administracaoImg,
      technologies: [
        TECHNOLOGIES.bootstrap,
        TECHNOLOGIES.html,
        TECHNOLOGIES.css,
        TECHNOLOGIES.javascript,
        TECHNOLOGIES.express,
        TECHNOLOGIES.nodejs
      ]
    },
    {
      title: 'Notificações e opções',
      description:
        'Nesta seção de administração, os professores podem enviar notificações personalizadas aos alunos, bem como ' +
        'importar e exportar a lista de aulas.',
      src: opcoesImg,
      technologies: [
        TECHNOLOGIES.bootstrap,
        TECHNOLOGIES.html,
        TECHNOLOGIES.css,
        TECHNOLOGIES.javascript,
        TECHNOLOGIES.express,
        TECHNOLOGIES.nodejs
      ]
    }
  ]
}
