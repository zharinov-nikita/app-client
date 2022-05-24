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
    showMessage,
    deleteLink
} from "../reducers"

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

    delete(_id) {
        return async function (dispatch) {
            try {
                await axios.delete(`http://localhost:3030/microservice/link/${_id}`)
                dispatch(deleteLink(_id))
            } catch (e) {

            }
        }
    }


}

export default new ApiLink()