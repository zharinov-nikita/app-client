import axios from "axios"
import { ILink } from "../interfaces/link"

class Api {
    enpoint = 'http://localhost:3030/microservice/link'
    getLinks = async () => (await axios.get<ILink[]>(this.enpoint)).data
    createLink = async (link: ILink) => (await axios.post<ILink>(this.enpoint, link)).data
    updateLink = async (link: ILink) => (await axios.patch<ILink>(this.enpoint, link)).data
    deleteLink = async (link: ILink) => (await axios.delete<ILink>(`${this.enpoint}/${link._id}`)).data
}

export default new Api()