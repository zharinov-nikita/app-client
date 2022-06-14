import React from 'react'
import { Card, Col, Tabs, Typography, Tag } from 'antd'
import Buttons from './Buttons/Buttons'

import { LinkType } from "../../../../store/types/link.type"

interface ILinkProps {
    link: LinkType
}




const { TabPane } = Tabs
const { Text } = Typography


const Item: React.FC<ILinkProps> = ({ link }) => {
    const { _id, offer, model, title, description, url, short } = link
    const message = 'Неопределено'
    return (
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
            <Card title={<Tag color={'blue'} children={title} />}
                extra={<Buttons document={link} />}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="_id" key="_id">
                        <Text children={(_id) ? _id : message} code />
                    </TabPane>
                    <TabPane tab="offer" key="offer">
                        <Text children={(offer) ? offer : message} code />
                    </TabPane>
                    <TabPane tab="model" key="model">
                        <Text children={(model) ? model : message} code />
                    </TabPane>
                    <TabPane tab="title" key="title">
                        <Text children={(title) ? title : message} code />
                    </TabPane>
                    <TabPane tab="description" key="description">
                        <Text children={(description) ? description : message} code />
                    </TabPane>
                    <TabPane tab="url" key="url">
                        <Text children={(url) ? url : message} code />
                    </TabPane>
                    <TabPane tab="short" key="short">
                        <Text children={(short) ? short : message} code />
                    </TabPane>
                </Tabs>
            </Card>
        </Col>
    )
}

export default Item