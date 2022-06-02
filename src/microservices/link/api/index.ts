import axios from "axios"
import { ILink } from "../interfaces/link"

class Api {
    enpoint = 'http://localhost:3030/microservice/link'

    async getLinks() {
        const req = await axios.get<ILink[]>(this.enpoint)
        return req.data
    }

    async createLink(link: ILink) {
        const req = await axios.post<ILink>(this.enpoint, link)
        return req.data
    }

    async updateLink(link: ILink) {
        const req = await axios.patch<ILink>(this.enpoint, link)
        return req.data
    }

    async deleteLink(link: ILink) {
        const req = await axios.delete<ILink>(`${this.enpoint}/${link._id}`)
        return req.data
    }
}

export default new Api()