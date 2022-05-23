import axios from "axios"
import { getLinks, showError, startLoad, finishLoad } from "../store/reducers/link"

class ApiLink {
    get() {
        return async function (dispatch) {
            try {
                dispatch(startLoad())
                const req = await axios.get('http://localhost:3030/microservice/link')
                const res = await req.data
                dispatch(getLinks(res))
            } catch (e) {
                dispatch(showError())
            } finally {
                dispatch(finishLoad())
            }
        }
    }
}

export default new ApiLink()