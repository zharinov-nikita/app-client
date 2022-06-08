import React from 'react'
import { Button, Checkbox, Col, Input, List, Row, Typography } from 'antd'
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
        <Col span={24}   >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => dispatch(updateTaskProcess({ ...task, completed: !task.completed }))} >
                    <Typography.Link strong>
                        {task.name}
                    </Typography.Link>
                </Checkbox>
                <Button children='Начать' size='small' style={{ borderRadius: 4, backgroundColor: '#f0f5ff', color: '#2f54eb' }} />
            </div>
        </Col>
    )
}

export default TaskItem