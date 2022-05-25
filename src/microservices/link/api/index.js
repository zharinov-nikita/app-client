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
    deleteLink,
    updateLink
} from "../reducers/actionsCreator"

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
            } catch (e) {
                console.log(e)
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

    update(data) {
        return async function (dispatch) {
            try {
                const req = await axios.patch('http://localhost:3030/microservice/link', data)
                const res = await req.data
                dispatch(updateLink(res))
                dispatch(hideDrawer())
            } catch (e) {
                console.log(e)
            }
        }
    }

}

export default new ApiLink()