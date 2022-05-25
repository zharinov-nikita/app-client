import React from 'react'
import { Card, Col, Tabs } from 'antd'
import LinkItemButtons from './LinkItemButtons'
const { TabPane } = Tabs


const LinkItem = ({ document }) => {
    const message = 'Неопределено'
    return (
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
            <Card title={document.title} extra={<LinkItemButtons _id={document._id} document={document} />}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="_id" key="_id">
                        {(document._id) ? document._id : message}
                    </TabPane>
                    <TabPane tab="offer" key="offer">
                        {(document.offer) ? document.offer : message}
                    </TabPane>
                    <TabPane tab="model" key="model">
                        {(document.model) ? document.model : message}
                    </TabPane>
                    <TabPane tab="title" key="title">
                        {(document.title) ? document.title : message}
                    </TabPane>
                    <TabPane tab="description" key="description">
                        {(document.description) ? document.description : message}
                    </TabPane>
                    <TabPane tab="url" key="url">
                        {(document.url) ? document.url : message}
                    </TabPane>
                    <TabPane tab="short" key="short">
                        {(document.short) ? document.short : message}
                    </TabPane>
                </Tabs>
            </Card>
        </Col>
    )
}

export default LinkItem