import { BADGES } from '../badges'
import { IProject } from '../projects'
import { TECHNOLOGIES } from '../technologies'

export const TOTP: IProject = {
  id: 'totp',
  name: 'Open TOTP Keeper',
  github: 'https://github.com/josejefferson/open-totp-keeper',
  link: 'https://open-totp-keeper.vercel.app/',
  badges: [BADGES.openSource],
  description:
    'O Open TOTP Keeper é um gerenciador de tokens TOTP seguro, prático e totalmente online, permitindo armazenar e gerar códigos de autenticação de dois fatores (2FA) diretamente no navegador, sem necessidade de instalação. Todas as chaves secretas são criptografadas com sua senha, garantindo máxima proteção, e nenhum dado é enviado para servidores, pois tudo é armazenado localmente no seu dispositivo.',
  images: ['/img/projects/totp-destaque.webp'],
  technologies: [
    TECHNOLOGIES.solid,
    TECHNOLOGIES.tailwind,
    TECHNOLOGIES.typescript,
    TECHNOLOGIES.html,
    TECHNOLOGIES.css
  ],
  detailImages: [
    {
      title: 'Banco de dados criptografado com senha',
      description:
        'Ao iniciar a aplicação, você será solicitado a criar uma senha para proteger seus dados. Essa senha será utilizada para criptografar e descriptografar o banco de dados local, garantindo que somente você tenha acesso aos seus tokens.',
      src: '/img/projects/totp-create-database.webp'
    },
    {
      title: 'Tela inicial',
      description:
        'Será exibida uma lista com todos os tokens cadastrados, juntamente com um botão para copiar o código atual e uma barra de progresso circular para indicar o tempo restante até a próxima atualização.',
      src: '/img/projects/totp-home.webp'
    },
    {
      title: 'Adicionar token',
      description:
        'É possível adicionar um novo token manualmente ou escaneando o QR Code disponibilizado pelo serviço que deseja proteger. Também é possível definir um nome personalizado para facilitar a identificação.',
      src: '/img/projects/totp-add.webp'
    },
    {
      title: 'Proteção por senha',
      description: 'Sempre que o site for fechado, será necessário informar a senha para acessar os dados.',
      src: '/img/projects/totp-login.webp'
    },
    {
      title: 'Tema claro/escuro',
      description:
        'O Open TOTP Keeper possui suporte a temas claro e escuro, permitindo uma experiência mais agradável.',
      src: '/img/projects/totp-light-dark-mode.webp'
    },
    {
      title: 'Configurações',
      description:
        'Nas configurações, é possível alterar a senha, exportar/importar os dados e limpar o banco de dados.',
      src: '/img/projects/totp-settings.webp'
    },
    {
      title: 'Palavras de recuperação de senha',
      description:
        'Ao criar uma senha, você poderá baixar um conjunto de palavras de recuperação que podem ser utilizadas para recuperar o acesso à sua conta, caso esqueça a senha. Isso é necessário, pois a senha é utilizada para criptografar os dados, e não é possível recuperá-la, já que ela não é armazenada em nenhum lugar.',
      src: '/img/projects/totp-recovery-words.webp'
    }
  ]
}
