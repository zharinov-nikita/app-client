import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { projectSlice, ProjectType } from './store/project'

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

import { Select } from 'antd';


const { Option } = Select;



const Project: React.FC = () => {
    const dispatch = useAppDispatch()
    const { completedTask, statusProject, dateTask } = projectSlice.actions
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
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e: { target: HTMLInputElement }) => dispatch(dateTask({ projectId, id, name, completed, date: e.target.value }))}
                                />
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