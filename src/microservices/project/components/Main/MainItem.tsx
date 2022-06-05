import React, { useEffect, useState } from 'react'
import { Col, Row, Tag, Typography } from 'antd'
import { StatusColorType, StatusType } from './MainExtra'


type TaskType = {
    task: {
        number: number
        issue: string
        status: StatusType
        date: string | number
    }
}

const MainItem: React.FC<TaskType> = ({ task }) => {
    const { number, issue, status, date } = task
    const [disabled, setDisabled] = useState<boolean>(false)
    const [deleted, setDeleted] = useState<boolean>(false)
    const [color, setColor] = useState<StatusColorType>('green')

    useEffect(() => {
        switch (status) {
            case 'запланировано':
                return setColor('orange')
            case 'работа':
                return setColor('red')
            case 'завершено':
                return setColor('green')
        }
    }, [status])


    useEffect(() => {
        switch (status) {
            case 'запланировано':
                return setDeleted(false)
            case 'работа':
                return setDeleted(false)
            case 'завершено':
                return setDeleted(true)
        }
    }, [status])

    useEffect(() => {
        switch (status) {
            case 'запланировано':
                return setDisabled(true)
            case 'работа':
                return setDisabled(false)
            case 'завершено':
                return setDisabled(false)
        }
    }, [status])





    return (
        <Col span={24}>
            <Row gutter={[12, 12]}>
                <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Typography.Text children={number} keyboard />
                        <Typography.Link strong children={issue} delete={deleted} disabled={disabled} />
                    </div>
                </Col>
                <Col span={4} >
                    <Tag children={status} style={{ borderRadius: 4 }} color={color} />
                </Col>
                <Col span={4} >
                    <Typography.Text children={date} mark={deleted} disabled={disabled} />
                </Col>
                <Col span={4} >
                    <Tag children='Алгоритм' style={{ borderRadius: 4 }} color='blue' />
                </Col>
            </Row>
        </Col>
    )
}

export default MainItem