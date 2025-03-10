import adiantarAulasImg from '../../assets/images/projects/vagazero/vagazero-adiantar-aulas.webp'
import demonstracaoImg from '../../assets/images/projects/vagazero/vagazero-demonstracao.webp'
import faltarAulasImg from '../../assets/images/projects/vagazero/vagazero-faltar-aulas.webp'
import telaInicialImg from '../../assets/images/projects/vagazero/vagazero-tela-inicial.webp'
import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const VAGAZERO: IProject = {
  id: 'vagazero',
  name: 'VagaZero',
  badges: [BADGES.production, BADGES.private],
  description:
    'VagaZero é uma plataforma desenvolvida especialmente para facilitar o controle de presença e o remanejamento de ' +
    'aulas dos professores do IFPB. No site, os professores podem registrar suas faltas de forma rápida e prática, ' +
    'além de selecionar os horários livres disponíveis para ministrar as aulas pendentes. Além disso, os ' +
    'coordenadores têm acesso ao registro de faltas, permitindo uma gestão mais eficiente e transparente do quadro ' +
    'de docentes.',
  images: [telaInicialImg, adiantarAulasImg, faltarAulasImg],
  mainTechnologies: [
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.react,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.express,
    TECHNOLOGIES.docker,
    TECHNOLOGIES.chakraUI
  ],
  technologies: [
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.docker,
    TECHNOLOGIES.github,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.react,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.yarn,
    TECHNOLOGIES.eslint,
    TECHNOLOGIES.prettier,
    TECHNOLOGIES.git,
    TECHNOLOGIES.axios,
    TECHNOLOGIES.bcrypt,
    TECHNOLOGIES.chakraUI,
    TECHNOLOGIES.dayJS,
    TECHNOLOGIES.express,
    TECHNOLOGIES.jotai,
    TECHNOLOGIES.jwt,
    TECHNOLOGIES.nodemailer,
    TECHNOLOGIES.prisma,
    TECHNOLOGIES.reactEmail,
    TECHNOLOGIES.reactHookForm,
    TECHNOLOGIES.reactIcons
  ],
  detailImages: [
    {
      title: 'Demonstração',
      description:
        'Aqui está um exemplo de como um professor pode registrar suas faltas e adiantamentos de aulas de forma ' +
        'simples e eficiente no sistema.',
      src: demonstracaoImg
    },
    {
      title: 'Tela inicial',
      description:
        'Nesta seção, é apresentado um resumo das faltas e aulas adiantadas do professor, além de botões intuitivos ' +
        'que permitem que ele registre suas faltas ou adiante aulas com facilidade.',
      src: telaInicialImg,
      technologies: [TECHNOLOGIES.chakraUI, TECHNOLOGIES.react, TECHNOLOGIES.nextjs, TECHNOLOGIES.dayJS]
    },
    {
      title: 'Faltar aulas',
      description: 'Nesta seção, o professor pode selecionar os horários em que deseja faltar.',
      src: faltarAulasImg,
      technologies: [
        TECHNOLOGIES.chakraUI,
        TECHNOLOGIES.react,
        TECHNOLOGIES.jotai,
        TECHNOLOGIES.axios,
        TECHNOLOGIES.dayJS,
        TECHNOLOGIES.nodemailer,
        TECHNOLOGIES.reactEmail
      ]
    },
    {
      title: 'Adiantar aulas',
      description: 'Nesta área, o professor pode selecionar os horários disponíveis para adiantar suas aulas.',
      src: adiantarAulasImg,
      technologies: [
        TECHNOLOGIES.chakraUI,
        TECHNOLOGIES.react,
        TECHNOLOGIES.jotai,
        TECHNOLOGIES.axios,
        TECHNOLOGIES.dayJS,
        TECHNOLOGIES.nodemailer,
        TECHNOLOGIES.reactEmail
      ]
    }
  ]
}
