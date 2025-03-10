import administracaoImg from '../../assets/images/projects/cranio/cranio-administracao.webp'
import anunciosImg from '../../assets/images/projects/cranio/cranio-anuncios.webp'
import desafioImg from '../../assets/images/projects/cranio/cranio-desafio.webp'
import desafiosImg from '../../assets/images/projects/cranio/cranio-desafios.webp'
import digiteMatriculaImg from '../../assets/images/projects/cranio/cranio-digite-matricula.webp'
import telaInicialImg from '../../assets/images/projects/cranio/cranio-tela-inicial.webp'
import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const CRANIO: IProject = {
  id: 'cranio',
  name: 'Crânio',
  github: 'https://github.com/josejefferson/cranio',
  link: 'https://cranio-dev.vercel.app/',
  badges: [BADGES.openSource],
  description:
    'O "Crânio" é um sistema de mural de avisos eletrônicos desenvolvido especificamente para o IFPB. Além de servir ' +
    'como um mural informativo, o Crânio oferece aos alunos a oportunidade de participar de um jogo de perguntas ' +
    'integrado, onde podem responder às questões e, a critério do professor, ter a chance de ganhar recompensas.\n\n' +
    'Este projeto foi concebido por um professor do campus com a ideia de executá-lo em uma Raspberry Pi, conectada ' +
    'a um monitor e um teclado numérico. Isso permite que os alunos visualizem os avisos no mural e interajam ' +
    'facilmente com o jogo de perguntas. Quando um aluno responde a uma pergunta corretamente, o sistema envia ' +
    'automaticamente um e-mail ao professor notificando-o da resposta correta.',
  images: [telaInicialImg],
  mainTechnologies: [
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.react,
    TECHNOLOGIES.mongodb,
    TECHNOLOGIES.bootstrap,
    TECHNOLOGIES.chakraUI,
    TECHNOLOGIES.ejs
  ],
  technologies: [
    TECHNOLOGIES.github,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.react,
    TECHNOLOGIES.mongodb,
    TECHNOLOGIES.yarn,
    TECHNOLOGIES.eslint,
    TECHNOLOGIES.prettier,
    TECHNOLOGIES.git,
    TECHNOLOGIES.axios,
    TECHNOLOGIES.bootstrap,
    TECHNOLOGIES.chakraUI,
    TECHNOLOGIES.dayJS,
    TECHNOLOGIES.ejs,
    TECHNOLOGIES.express,
    TECHNOLOGIES.nodemailer,
    TECHNOLOGIES.formik,
    TECHNOLOGIES.reactIcons
  ],
  detailImages: [
    {
      title: 'Tela inicial',
      description:
        'Nesta página, os anúncios ativos são exibidos de forma dinâmica, deslizando pela tela. Na parte inferior, é ' +
        'exibido o número de desafios de perguntas disponíveis para resposta, incentivando a participação dos alunos.',
      technologies: [TECHNOLOGIES.bootstrap, TECHNOLOGIES.react, TECHNOLOGIES.nextjs, TECHNOLOGIES.typescript],
      src: telaInicialImg
    },
    {
      title: 'Identificação',
      description:
        'Nesta tela, o aluno insere sua matrícula e o sistema automaticamente busca por desafios relacionados ao seu ' +
        'curso. Caso haja algum desafio disponível, ele será iniciado imediatamente, facilitando a participação dos ' +
        'alunos de forma direcionada e personalizada. Cada aluno só poderá realizar 1 desafio por dia.',
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.mongodb],
      src: digiteMatriculaImg
    },
    {
      title: 'Desafio',
      description:
        'Uma pergunta é exibida na tela, onde o usuário deve responder corretamente utilizando o teclado do totem. O ' +
        'tempo é limitado e definido pelo criador da pergunta. Se o aluno responder corretamente, o desafio é ' +
        'encerrado automaticamente e um e-mail é enviado ao professor responsável pelo desafio, informando o acerto ' +
        'e o aluno que respondeu corretamente.',
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.mongodb],
      src: desafioImg
    },
    {
      title: 'Administração',
      description:
        'Nesta área, o responsável pelo sistema pode cadastrar novos anúncios e desafios, garantindo a atualização e ' +
        'diversificação do conteúdo disponível para os alunos.',
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.typescript],
      src: administracaoImg
    },
    {
      title: 'Administração / Anúncios',
      description:
        'Nesta seção, serão listados os anúncios ativos e arquivados, incluindo sua data de expiração e informações ' +
        'relevantes. É possível criar, editar e excluir anúncios diretamente nesta interface, proporcionando ' +
        'flexibilidade na gestão do conteúdo exibido aos usuários.',
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.mongodb],
      src: anunciosImg
    },
    {
      title: 'Administração / Desafios',
      description:
        'Nesta seção, são apresentados os desafios não resolvidos e os já resolvidos, juntamente com informações ' +
        'como o tempo de duração, número de alternativas e cursos relacionados. Os responsáveis podem criar, editar ' +
        'e excluir desafios diretamente nesta interface, garantindo uma gestão ágil e precisa do conteúdo disponível ' +
        'para os usuários.',
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.mongodb],
      src: desafiosImg
    }
  ]
}
