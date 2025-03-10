import administracaoImg from '../../assets/images/projects/lampys/lampys-lojaweb-administracao.webp'
import checkoutImg from '../../assets/images/projects/lampys/lampys-lojaweb-checkout.webp'
import produtoImg from '../../assets/images/projects/lampys/lampys-lojaweb-produto.webp'
import telaInicialImg from '../../assets/images/projects/lampys/lampys-lojaweb-tela-inicial.webp'
import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const LAMPYS: IProject = {
  id: 'lampys',
  name: 'Lampys LojaWeb',
  link: 'https://loja1.lampys.com.br/',
  badges: [BADGES.production],
  description:
    'É uma solução paga para pequenos comerciantes que desejam criar suas lojas virtuais. Com uma variedade de ' +
    'recursos intuitivos, permite que os comerciantes cadastrem produtos, personalizem banners e gerenciem ' +
    'inventários com facilidade. As compras realizadas pelos usuários são redirecionadas ao WhatsApp e gerenciadas ' +
    'pelo comerciante.',
  images: [telaInicialImg, produtoImg, administracaoImg],
  technologies: [
    TECHNOLOGIES.nodejs,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.react,
    TECHNOLOGIES.nextjs,
    TECHNOLOGIES.postgresql,
    TECHNOLOGIES.express,
    TECHNOLOGIES.docker,
    TECHNOLOGIES.chakraUI,
    TECHNOLOGIES.materialUI,
    TECHNOLOGIES.reactAdmin
  ],
  detailImages: [
    { title: 'Tela Inicial', src: telaInicialImg },
    { title: 'Visualização do Produto', src: produtoImg },
    { title: 'Checkout do Carrinho', src: checkoutImg },
    { title: 'Administração', src: administracaoImg }
  ]
}
