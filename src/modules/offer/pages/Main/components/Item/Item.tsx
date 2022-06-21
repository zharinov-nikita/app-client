import React from 'react'
import { Card, Col, Tabs, Typography, Tag } from 'antd'
import Buttons from './Buttons/Buttons'

import { OfferType } from "../../../../store/types/offer.type"

type PropsType = {
    offer: OfferType
}


const { TabPane } = Tabs
const { Text } = Typography


const Item: React.FC<PropsType> = ({ offer }) => {
    const { _id, name, model, type, pay, url, short } = offer
    const message = 'Неопределено'
    return (
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
            <Card title={<Tag color={'blue'} children={name} />}
                extra={<Buttons document={offer} />}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="id" key="_id">
                        <Text children={(_id) ? _id : message} code />
                    </TabPane>
                    <TabPane tab="название" key="name">
                        <Text children={(name) ? name : message} code />
                    </TabPane>
                    <TabPane tab="модель" key="model">
                        <Text children={(model) ? model : message} code />
                    </TabPane>
                    <TabPane tab="тип" key="type">
                        <Text children={(type) ? type : message} code />
                    </TabPane>
                    <TabPane tab="оплата" key="pay">
                        <Text children={(pay.value) ? `${pay.value} ${pay.currency}` : message} code />
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