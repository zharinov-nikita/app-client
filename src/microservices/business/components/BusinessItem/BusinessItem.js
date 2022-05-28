import React from 'react'
import { Link } from 'react-router-dom'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline, Progress, Typography } from 'antd'

import { Card, Col, Tag, Badge } from 'antd'
const { Text } = Typography



const BusinessItem = ({ document }) => {
    const { creationDate, seo, domain } = document
    return (
        <Col span={12} xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
            <Card title='Проект' extra={
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Tag color={'red'} children={<Text strong style={{ color: '#ff7875' }}>{creationDate}</Text>} icon={<ClockCircleOutlined />} />
                    <Badge count={24} />
                </div>
            }>
                <Timeline>
                    <Timeline.Item color='green'>
                        <Link to={`seo/${seo}`}>
                            <Text strong>Сео</Text>
                        </Link>
                    </Timeline.Item>
                    <Timeline.Item color='green'>
                        <Link to={'content/1'}>
                            <Text strong disabled>Контент</Text>
                        </Link>
                    </Timeline.Item>
                    <Timeline.Item color='red'>
                        <Link to={`domain/${domain}`}>
                            <Text strong disabled>Доменное имя</Text>
                        </Link>
                    </Timeline.Item>
                    <Timeline.Item color='yellow'>
                        <Link to={'integration/1'}>
                            <Text strong disabled>Интеграция</Text>
                        </Link>
                    </Timeline.Item>
                    <Timeline.Item color='yellow'>
                        <Link to={'promotion/1'}>
                            <Text strong disabled>Продвижение</Text>
                        </Link>
                    </Timeline.Item>
                </Timeline>
                <Progress percent={50} status="active" showInfo={false} />
            </Card>
        </Col >
    )
}

export default BusinessItem