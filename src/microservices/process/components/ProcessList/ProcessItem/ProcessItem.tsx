import { Row } from 'antd'
import React from 'react'
import { ProcessType } from '../../../store/process'
import TaskItem from './TaskItem/TaskItem'

type PropsType = {
    process: ProcessType
}



const ProcessItem: React.FC<PropsType> = ({ process }) => {
    return (
        <Row gutter={[8, 8]} >
            {process.tasks.map(task => <TaskItem task={task} key={task._id} />)}
        </Row>
    )
}

export default ProcessItem