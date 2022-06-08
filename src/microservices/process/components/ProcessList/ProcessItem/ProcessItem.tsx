import React from 'react'
import { ProcessType } from '../../../store/process'
import TaskItem from './TaskItem/TaskItem'

type PropsType = {
    process: ProcessType
}



const ProcessItem: React.FC<PropsType> = ({ process }) => {
    return (
        <>
            {process.tasks.map(task => <TaskItem task={task} key={task._id} />)}
        </>
    )
}

export default ProcessItem