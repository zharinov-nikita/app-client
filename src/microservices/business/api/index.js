import axios from "axios"
import {
    appStartLoad,
    appFinishLoad,

    appShowError,
} from '../../../store/actions'


import {
    businessGetProjects
} from "../store/actions"

import { ENDPOINT } from "./endpoints"

class ApiBusiness {
    getAll() {
        return async function (dispatch) {
            try {
                dispatch(appStartLoad())
                const req = await axios.get(ENDPOINT)
                const res = await req.data
                dispatch(businessGetProjects(res))
            } catch (e) {
                dispatch(appShowError())
            } finally {
                dispatch(appFinishLoad())
            }
        }
    }
}

export default new ApiBusiness()