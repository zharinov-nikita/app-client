import React from 'react'
import { Button, Select } from 'antd';

import { useAppDispatch } from '../../../../../hooks/redux'
import { processSlice, ProcessType, StatusProcessType } from '../../../store/process'
import TaskItem from './TaskItem/TaskItem'

type PropsType = {
    process: ProcessType
}

const { Option } = Select;



const ProcessItem: React.FC<PropsType> = ({ process }) => {
    const dispatch = useAppDispatch()
    const { createProcess, deleteProcess, updateProcess, createTaskProcess } = processSlice.actions
    return (
        <div>
            <div style={{ display: "flex", alignItems: 'center', gap: 8 }}>
                <mark>{process._id}</mark>
                <input
                    type="text"
                    value={process.name}
                    onChange={(e: { target: HTMLInputElement }) => dispatch(updateProcess({ ...process, name: e.target.value }))}
                />
                <Select
                    defaultValue={process.status}
                    style={{ width: 120 }}
                    onChange={(value: StatusProcessType) => dispatch(updateProcess({ ...process, status: value }))}
                >
                    <Option value="запланировано">запланировано</Option>
                    <Option value="работа">работа</Option>
                    <Option value="завершено">завершено</Option>
                </Select>
                <Button
                    onClick={() => dispatch(createTaskProcess({
                        _id: Date.now(),
                        processId: Number(process._id),
                        name: 'Новая задача',
                        date: '2022-08-02',
                        completed: false
                    }))}
                    children={'Добавить задачу'}
                />
            </div>

            <ul>
                {process.tasks.map(task => <TaskItem task={task} key={task._id} />)}
            </ul>
        </div>
    )
}

export default ProcessItem