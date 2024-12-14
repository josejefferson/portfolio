import { ITechnologyType, TECHNOLOGY_TYPES } from './technology-types'

export interface ITechnology {
  name: string
  image: string
  type: ITechnologyType
  description?: string
  site?: string
}

export const TECHNOLOGIES = {
  typescript: {
    name: 'TypeScript',
    image: '/icons/typescript.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://www.typescriptlang.org/'
  },
  javascript: {
    name: 'JavaScript',
    image: '/icons/javascript.svg',
    type: TECHNOLOGY_TYPES.language
  },
  html: {
    name: 'HTML',
    image: '/icons/html.svg',
    type: TECHNOLOGY_TYPES.language
  },
  css: {
    name: 'CSS',
    image: '/icons/css.svg',
    type: TECHNOLOGY_TYPES.language
  },
  sass: {
    name: 'SASS',
    image: '/icons/sass.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://sass-lang.com/'
  },
  python: {
    name: 'Python',
    image: '/icons/python.svg',
    type: TECHNOLOGY_TYPES.language,
    site: 'https://www.python.org/'
  },
  react: {
    name: 'React',
    image: '/icons/react.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://react.dev/'
  },
  nextjs: {
    name: 'Next.js',
    image: '/icons/nextjs.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://nextjs.org/'
  },
  nestjs: {
    name: 'NestJS',
    image: '/icons/nestjs.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://nestjs.com/'
  },
  svelte: {
    name: 'Svelte',
    image: '/icons/svelte.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://svelte.dev/'
  },
  angular: {
    name: 'Angular',
    image: '/icons/angular.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://angular.io/'
  },
  angularjs: {
    name: 'Angular JS',
    image: '/icons/angularjs.svg',
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
    image: '/icons/socketio.svg',
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
    image: '/icons/bootstrap.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://getbootstrap.com/'
  },
  nodejs: {
    name: 'Node.js',
    image: '/icons/nodejs.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://nodejs.org/en'
  },
  bun: {
    name: 'Bun',
    image: '/icons/bun.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://bun.sh/'
  },
  vscode: {
    name: 'Visual Studio Code',
    image: '/icons/vscode.svg',
    type: TECHNOLOGY_TYPES.application,
    site: 'https://code.visualstudio.com/'
  },
  git: {
    name: 'Git',
    image: '/icons/git.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://git-scm.com/'
  },
  github: {
    name: 'GitHub',
    image: '/icons/github.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://github.com/'
  },
  mongodb: {
    name: 'MongoDB',
    image: '/icons/mongodb.svg',
    type: TECHNOLOGY_TYPES.database,
    site: 'https://www.mongodb.com/'
  },
  postgresql: {
    name: 'PostgreSQL',
    image: '/icons/postgresql.svg',
    type: TECHNOLOGY_TYPES.database,
    site: 'https://www.postgresql.org/'
  },
  yarn: {
    name: 'Yarn',
    image: '/icons/yarn.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://yarnpkg.com/'
  },
  npm: {
    name: 'NPM',
    image: '/icons/npm.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://www.npmjs.com/'
  },
  figma: {
    name: 'Figma',
    image: '/icons/figma.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://www.figma.com/'
  },
  dialogflow: {
    name: 'Dialogflow',
    image: '/icons/dialogflow.svg',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://dialogflow.cloud.google.com/'
  },
  framework7: {
    name: 'Framework7',
    image: '/icons/framework7.svg',
    type: TECHNOLOGY_TYPES.framework,
    site: 'https://framework7.io/'
  },

  // Bibliotecas
  axios: {
    name: 'Axios',
    image: '/icons/axios.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://axios-http.com/'
  },
  bcrypt: {
    name: 'Bcrypt',
    image: '/icons/bcrypt.svg',
    type: TECHNOLOGY_TYPES.library
  },
  chakraUI: {
    name: 'Chakra UI',
    image: '/icons/chakra-ui.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://chakra-ui.com/'
  },
  dayJS: {
    name: 'Day.js',
    image: '/icons/day-js.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://day.js.org/'
  },
  ejs: {
    name: 'EJS',
    image: '/icons/ejs.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://ejs.co/'
  },
  esbuild: {
    name: 'esbuild',
    image: '/icons/esbuild.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://esbuild.github.io/'
  },
  eslint: {
    name: 'ESLint',
    image: '/icons/eslint.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://eslint.org/'
  },
  formik: {
    name: 'Formik',
    image: '/icons/formik.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://formik.org/'
  },
  jotai: {
    name: 'Jotai',
    image: '/icons/jotai.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://jotai.org/'
  },
  jwt: {
    name: 'JSON Web Tokens',
    image: '/icons/jwt.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://jwt.io/'
  },
  jquery: {
    name: 'jQuery',
    image: '/icons/jquery.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://jquery.com/'
  },
  materialUI: {
    name: 'Material UI',
    image: '/icons/material-ui.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://mui.com/'
  },
  nodemailer: {
    name: 'Nodemailer',
    image: '/icons/nodemailer.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://www.nodemailer.com/'
  },
  prettier: {
    name: 'Prettier',
    image: '/icons/prettier.png',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://prettier.io/'
  },
  reactAdmin: {
    name: 'React Admin',
    image: '/icons/react-admin.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://marmelab.com/react-admin/'
  },
  reactEmail: {
    name: 'React Email',
    image: '/icons/react-email.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://react.email/'
  },
  reactHookForm: {
    name: 'React Hook Form',
    image: '/icons/react-hook-form.png',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://react-hook-form.com/'
  },
  reactIcons: {
    name: 'React Icons',
    image: '/icons/react-icons.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://react-icons.github.io/react-icons/'
  },
  tailwind: {
    name: 'Tailwind CSS',
    image: '/icons/tailwind.svg',
    type: TECHNOLOGY_TYPES.library,
    site: 'https://tailwindcss.com/'
  },

  docker: {
    name: 'Docker',
    image: '/icons/docker.png',
    type: TECHNOLOGY_TYPES.platform,
    site: 'https://www.docker.com/'
  },
  tampermonkey: {
    name: 'Tampermonkey',
    image: '/icons/tampermonkey.svg',
    type: TECHNOLOGY_TYPES.tool,
    site: 'https://www.tampermonkey.net/'
  }
} satisfies Record<string, ITechnology>
