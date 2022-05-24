import axios from "axios"
import {
    getLinks,
    showError,
    startLoad,
    finishLoad,
    createLink,
    hideDrawer,
    hideError,
    clearForm,
    showMessage
} from "../store/reducers/link"

class ApiLink {
    create(data) {
        return async function (dispatch) {
            try {
                const req = await axios.post('http://localhost:3030/microservice/link', data)
                const res = await req.data
                dispatch(createLink(res))
                dispatch(hideDrawer())
                dispatch(hideError())
                dispatch(clearForm())
                dispatch(showMessage('success'))
            } catch (e) {
                dispatch(showMessage('error'))
            }
        }
    }

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