import About from './about'
import Contact from './contact'
import Education from './education'
import Experience from './experience'
import MainTechnologies from './main-technologies'
import Main from './main'
import MainProjects from './main-projects'
import OtherProjects from './other-projects'
import Skills from './skills'

export const Sections = {
  Main,
  About,
  Languages: MainTechnologies,
  Skills,
  Education,
  Experience,
  MainProjects,
  OtherProjects,
  Contact
}

export enum SECTION_IDS {
  main = 'inicio',
  about = 'sobre-mim',
  languages = 'linguagens',
  skills = 'habilidades',
  education = 'formacao',
  experience = 'experiencia',
  mainProjects = 'projetos-em-destaque',
  otherProjects = 'outros-projetos',
  contact = 'contato'
}
