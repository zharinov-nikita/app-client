import React from 'react'
import { Button, Checkbox, Col, Input, Row } from 'antd'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { processSlice, TaskType } from '../../../../store/process'
import type { DatePickerProps } from 'antd';


type PropsTaskItemType = {
    task: TaskType
}


const TaskItem: React.FC<PropsTaskItemType> = ({ task }) => {
    const dispatch = useAppDispatch()
    const { updateTaskProcess } = processSlice.actions
    return (
        <Row>
            <Col span={24}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => dispatch(updateTaskProcess({ ...task, completed: !task.completed }))} >
                    {task.name}
                </Checkbox>
            </Col>
        </Row>
    )
}

export default TaskItem