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

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date)
    };

    return (
        <>
            {projects.map(({ id, name, status, tasks }) =>
                <div key={id}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h4>{name}</h4>
                        <Select defaultValue={status} style={{ width: 180 }} onChange={(value: string) => dispatch(statusProject({ id, name, tasks, status: value }))}>
                            <Option value="запланировано">запланировано</Option>
                            <Option value="работа">работа</Option>
                            <Option value="завершено">завершено</Option>
                        </Select>
                    </div>
                    {tasks.map(({ projectId, id, name, date, completed }) =>
                        <ul key={id}>
                            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={completed}
                                        onChange={() => dispatch(completedTask({ projectId, id, name, date, completed }))}
                                        style={{ marginRight: 4 }}
                                    />
                                    <span style={{ fontWeight: 700 }}>{name}</span>
                                </div>
                                <input type="date" onChange={(e: { target: HTMLInputElement }) => dispatch(dateTask({ projectId, id, name, completed, date: e.target.value }))} value={date} />

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