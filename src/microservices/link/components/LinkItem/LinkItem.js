import React from 'react'
import { Card, Col, Tabs } from 'antd'
import LinkItemButtons from './LinkItemButtons'
const { TabPane } = Tabs


const LinkItem = ({ document }) => {
    const { _id, offer, model, title, description, url, short } = document
    const message = 'Неопределено'

    return (
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
            <Card title={title} extra={<LinkItemButtons document={document} />}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="_id" key="_id">
                        {(_id) ? _id : message}
                    </TabPane>
                    <TabPane tab="offer" key="offer">
                        {(offer) ? offer : message}
                    </TabPane>
                    <TabPane tab="model" key="model">
                        {(model) ? model : message}
                    </TabPane>
                    <TabPane tab="title" key="title">
                        {(title) ? title : message}
                    </TabPane>
                    <TabPane tab="description" key="description">
                        {(description) ? description : message}
                    </TabPane>
                    <TabPane tab="url" key="url">
                        {(url) ? url : message}
                    </TabPane>
                    <TabPane tab="short" key="short">
                        {(short) ? short : message}
                    </TabPane>
                </Tabs>
            </Card>
        </Col>
    )
}

export default LinkItem