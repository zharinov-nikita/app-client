import axios from "axios"
import { LinkType } from "../store/types/link.type"

class Api {
    enpoint = 'http://localhost:3030/microservice/link'
    getLinks = async () => (await axios.get<LinkType[]>(this.enpoint)).data
    createLink = async (data: LinkType) => (await axios.post<LinkType>(this.enpoint, data)).data
    updateLink = async (data: LinkType) => (await axios.patch<LinkType>(this.enpoint, data)).data
    deleteLink = async (data: LinkType) => (await axios.delete<LinkType>(`${this.enpoint}/${data._id}`)).data
}

export default new Api()