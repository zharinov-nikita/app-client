import axios from "axios"
import { IProject } from "../interfaces/project"

class Api {
    enpoint = 'http://localhost:3030/microservice/project'
    getProjects = async () => (await axios.get<IProject[]>(this.enpoint)).data
    createProject = async (link: IProject) => (await axios.post<IProject>(this.enpoint, link)).data
    updateProject = async (link: IProject) => (await axios.patch<IProject>(this.enpoint, link)).data
    deleteProject = async (link: IProject) => (await axios.delete<IProject>(`${this.enpoint}/${link._id}`)).data
}

export default new Api()