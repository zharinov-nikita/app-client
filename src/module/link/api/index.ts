import axios from "axios"
import { LinkType } from "../store/types/link.type"

class Api {
    enpoint = 'http://localhost:3030/microservice/link'
    getLinks = async () => (await axios.get<LinkType[]>(this.enpoint)).data
    createLink = async (link: LinkType) => (await axios.post<LinkType>(this.enpoint, link)).data
    updateLink = async (link: LinkType) => (await axios.patch<LinkType>(this.enpoint, link)).data
    deleteLink = async (link: LinkType) => (await axios.delete<LinkType>(`${this.enpoint}/${link._id}`)).data
}

export default new Api()