import React from 'react'
import { IProject } from '../../../interfaces/project'
import { Card, Col, Tag } from 'antd'

interface PropsItem {
    project: IProject
}

const Item: React.FC<PropsItem> = ({ project }) => {
    const { _id, title, offer, status } = project
    return (
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
            <Card title={<Tag color={'blue'} children={title} />}>

            </Card>
        </Col>
    )
}

export default Item