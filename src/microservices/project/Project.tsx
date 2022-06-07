import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { projectSlice } from './store/project'

const Project: React.FC = () => {
    const dispatch = useAppDispatch()
    const { completedTask } = projectSlice.actions
    const projects = useAppSelector(state => state.project.projects)
    return (
        <>
            {projects.map(({ id, name, status, tasks }) =>
                <div key={id}>
                    <h4>{name}</h4>
                    <h4>{status}</h4>
                    {tasks.map(({ projectId, id, name, date, completed }) =>
                        <ul key={id}>
                            <li>
                                <p>{name}</p>
                                <mark>{date}</mark>
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={() => dispatch(completedTask({ projectId, id, name, date, completed }))}
                                />
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}

export default Project