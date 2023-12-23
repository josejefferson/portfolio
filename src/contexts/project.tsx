import { IProject } from '#/data/projects'
import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'

export const ProjectContext = createContext<IProject>({} as any)

interface IProps extends PropsWithChildren {
  project: IProject
}

export default function ProjectProvider({ children, project }: IProps) {
  return <ProjectContext.Provider value={project}>{children}</ProjectContext.Provider>
}

export const useProject = () => useContext(ProjectContext)
