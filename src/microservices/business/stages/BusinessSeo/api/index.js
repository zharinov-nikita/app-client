import axios from "axios"
import { GET_ONE } from './endpoints'

class ApiBusinessSeo {
    async getOne(_id) {
        try {
            const req = await axios.get(`${GET_ONE}/${_id}`)
            const res = await req.data
            return res
        } catch (e) {

        } finally {

        }
    }
}

export default new ApiBusinessSeo()