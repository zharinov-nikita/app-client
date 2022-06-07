import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { projectSlice } from './store/project'

import { Select } from 'antd';


const { Option } = Select;



const Project: React.FC = () => {
    const dispatch = useAppDispatch()
    const { completedTask, statusProject } = projectSlice.actions
    const projects = useAppSelector(state => state.project.projects)

    return (
        <>
            {projects.map(({ id, name, status, tasks }) =>
                <div key={id}>
                    <h4>{name}</h4>
                    <Select defaultValue={status} style={{ width: 120 }} onChange={(value: string) => dispatch(statusProject({ id, name, tasks, status: value }))}>
                        <Option value="запланировано">запланировано</Option>
                        <Option value="работа">работа</Option>
                        <Option value="завершено">завершено</Option>
                    </Select>
                    {tasks.map(({ projectId, id, name, date, completed }) =>
                        <ul key={id}>
                            <li>
                                <span>{name}</span>
                                <mark>{date}</mark>
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={() => dispatch(completedTask({ projectId, id, name, date, completed }))}
                                />
                            </li>
                        </ul>
                    )}
                    <hr />
                </div>
            )}
        </>
    )
}

export default Project