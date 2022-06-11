import React from 'react'
import { Button, Checkbox, Col, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux'
import { processSlice, TaskType } from '../../../../store/process'


type PropsTaskItemType = {
    task: TaskType
}


const TaskItem: React.FC<PropsTaskItemType> = ({ task }) => {
    const dispatch = useAppDispatch()
    const { mainKey, extraKey } = useAppSelector(state => state.process)
    const {
        updateTaskProcess,
        showMainKey,
        showExtraKey
    } = processSlice.actions

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
                <Button
                    children='Начать'
                    size='small'
                    style={{ borderRadius: 4, backgroundColor: '#f0f5ff', color: '#2f54eb' }}
                    onClick={() => {
                        if (task.name === 'Главный ключ') {
                            dispatch(showMainKey({ ...mainKey, visible: true }))
                        }
                        if (task.name === 'Дополнительный ключ') {
                            dispatch(showExtraKey({ ...extraKey, visible: true }))
                        }
                    }}
                />
            </div>
        </Col>
    )
}

export default TaskItem