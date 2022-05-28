import axios from "axios"

import {
    businessStartLoad,
    businessFinishLoad,

    businessGetProjects
} from "../store/actions"

import { ENDPOINT } from "./endpoints"

class ApiBusiness {
    get() {
        return async function (dispatch) {
            try {
                dispatch(businessStartLoad())
                const req = await axios.get(ENDPOINT)
                const res = await req.data
                dispatch(businessGetProjects(res))
            } catch (e) {
                console.log(e)
            } finally {
                dispatch(businessFinishLoad())
            }
        }
    }
}

export default new ApiBusiness()