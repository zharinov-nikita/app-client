import Api from '../api'
import { IProject } from '../interfaces/project'
import { appSlice } from "../../../store/app"
import { projectSlice } from "../store/project"
import { useAppDispatch } from "../../../hooks/redux"

export default function useApiRequests() {
    const { showMessage, hideError } = appSlice.actions
    const { createProject, updateProject, deleteProject } = projectSlice.actions
    const dispatch = useAppDispatch()

    // CREATE
    async function asyncCreateProject(project: IProject) {
        try {
            const req = await Api.createProject(project)
            dispatch(createProject(req))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Проект ${project.title} успешно создан` }))
            dispatch(hideError())
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
            console.log(e)

        }
    }
    // CREATE


    // UPDATE
    async function asyncUpdateProject(project: IProject) {
        try {
            const req = await Api.updateProject(project)
            dispatch(updateProject(req))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Проект ${project.title} успешно обновлен` }))
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }
    // UPDATE


    // DELETE
    async function asyncDeleteProject(project: IProject) {
        try {
            await Api.deleteProject(project)
            if (project?._id) {
                dispatch(deleteProject(project._id))
                dispatch(showMessage({ id: Date.now(), level: 'success', content: `Проект ${project.title} успешно удален` }))
            }
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }
    // DELETE



    return {
        createProject: asyncCreateProject,
        updateProject: asyncUpdateProject,
        deleteProject: asyncDeleteProject,
    }
}