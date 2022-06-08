import { Button } from 'antd'
import React from 'react'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { processSlice, TaskType } from '../../../../store/process'

type PropsTaskItemType = {
    task: TaskType
}

const TaskItem: React.FC<PropsTaskItemType> = ({ task }) => {
    const dispatch = useAppDispatch()
    const { updateTaskProcess, deleteTaskProcess } = processSlice.actions
    return (
        <div>
            <li key={task._id} style={{ display: "flex", alignItems: 'center', gap: 8 }}>
                <span><mark>id задачи</mark> - {task._id}</span>
                <span><mark>id процесса</mark> - {task.processId}</span>
                <span>
                    <input
                        type="text"
                        value={task.name}
                        onChange={(e: { target: HTMLDataElement }) => dispatch(updateTaskProcess({ ...task, name: e.target.value }))}
                    />
                </span>
                <span>
                    <input
                        type="date"
                        value={task.date}
                        onChange={(e: { target: HTMLDataElement }) => dispatch(updateTaskProcess({ ...task, date: e.target.value }))}
                    />
                </span>
                <span>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(updateTaskProcess({ ...task, completed: !task.completed }))}
                    />
                </span>
                <span>
                    <Button
                        onClick={() => dispatch(deleteTaskProcess(task))}
                        children={'Удалить задачу'}
                        size={'small'}
                    />
                </span>
            </li>
        </div>
    )
}

export default TaskItem