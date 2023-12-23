import { ITechnologyType, TECHNOLOGY_TYPES } from './technology-types'

export interface ITechnology {
  name: string
  image: string
  type: ITechnologyType
  description?: string
  site?: string
}

// React Admin

export const TECHNOLOGIES = {
  typescript: {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://www.typescriptlang.org/'
  },
  javascript: {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    type: TECHNOLOGY_TYPES.language
  },
  html: {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    type: TECHNOLOGY_TYPES.language
  },
  css: {
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    type: TECHNOLOGY_TYPES.language
  },
  sass: {
    name: 'SASS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://sass-lang.com/'
  },
  python: {
    name: 'Python',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://www.python.org/'
  },
  react: {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://react.dev/'
  },
  nextjs: {
    name: 'Next.js',
    image: '/icons/nextjs.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://nextjs.org/'
  },
  svelte: {
    name: 'Svelte',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://svelte.dev/'
  },
  angular: {
    name: 'Angular',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://angular.io/'
  },
  angularjs: {
    name: 'Angular JS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://angularjs.org/'
  },
  express: {
    name: 'Express',
    image: '/icons/expressjs.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://expressjs.com/'
  },
  socketio: {
    name: 'Socket.IO',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://socket.io/'
  },
  prisma: {
    name: 'Prisma',
    image: '/icons/prisma.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://www.prisma.io/'
  },
  bootstrap: {
    name: 'Bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://getbootstrap.com/'
  },
  nodejs: {
    name: 'Node.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://nodejs.org/en'
  },
  vscode: {
    name: 'Visual Studio Code',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    type: TECHNOLOGY_TYPES.application,
    site: 'https://code.visualstudio.com/'
  },
  git: {
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://git-scm.com/'
  },
  github: {
    name: 'GitHub',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://github.com/'
  },
  mongodb: {
    name: 'MongoDB',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    type: TECHNOLOGY_TYPES.database,
    site: 'https://www.mongodb.com/'
  },
  postgresql: {
    name: 'PostgreSQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    type: TECHNOLOGY_TYPES.database,
    site: 'https://www.postgresql.org/'
  },
  yarn: {
    name: 'Yarn',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://yarnpkg.com/'
  },
  npm: {
    name: 'NPM',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://www.npmjs.com/'
  },
  figma: {
    name: 'Figma',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://www.figma.com/'
  },

  // Bibliotecas
  axios: {
    name: 'Axios',
    image: '/icons/axios.svg',
    type: TECHNOLOGY_TYPES.library
  },
  bcrypt: {
    name: 'Bcrypt',
    image: '/icons/bcrypt.svg',
    type: TECHNOLOGY_TYPES.library
  },
  chakraUI: {
    name: 'Chakra UI',
    image: '/icons/chakra-ui.svg',
    type: TECHNOLOGY_TYPES.library
  },
  dayJS: {
    name: 'Day.js',
    image: '/icons/day-js.png',
    type: TECHNOLOGY_TYPES.library
  },
  eslint: {
    name: 'ESLint',
    image: '/icons/eslint.svg',
    type: TECHNOLOGY_TYPES.tool
  },
  formik: {
    name: 'Formik',
    image: '/icons/formik.png',
    type: TECHNOLOGY_TYPES.library
  },
  jotai: {
    name: 'Jotai',
    image: '/icons/jotai.png',
    type: TECHNOLOGY_TYPES.library
  },
  jwt: {
    name: 'JSON Web Tokens',
    image: '/icons/jwt.png',
    type: TECHNOLOGY_TYPES.library
  },
  nodemailer: {
    name: 'Nodemailer',
    image: '/icons/nodemailer.png',
    type: TECHNOLOGY_TYPES.library
  },
  prettier: {
    name: 'Prettier',
    image: '/icons/prettier.png',
    type: TECHNOLOGY_TYPES.tool
  },
  reactEmail: {
    name: 'React Email',
    image: '/icons/react-email.svg',
    type: TECHNOLOGY_TYPES.library
  },
  reactIcons: {
    name: 'React Icons',
    image: '/icons/react-icons.svg',
    type: TECHNOLOGY_TYPES.library
  },

  docker: {
    name: 'Docker',
    image: '/icons/docker.png',
    type: TECHNOLOGY_TYPES.platform
  }
} satisfies Record<string, ITechnology>
