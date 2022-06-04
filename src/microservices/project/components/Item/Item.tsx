import React from 'react'
import css from './Item.module.css'
import { Card, Col, Layout, Row } from 'antd'

import { Tabs } from 'antd'
import Info from './Info/Info'
import Main from './Key/Main'

const { TabPane } = Tabs









const Item: React.FC = () => {
    return (
        <Layout className={css.itemLayout}>
            <Row gutter={[16, 16]}>
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                    <Card title='Рабочий процесс'>
                        <Tabs >
                            <TabPane tab='Главный' key={1}>
                                <Main />
                            </TabPane>
                            <TabPane tab='Высокочастототный' key={2}>
                                <Main />
                            </TabPane>
                            <TabPane tab='Среднечастотный' key={3}>
                                <Main />
                            </TabPane>
                            <TabPane tab='Низкочастотный' key={4}>
                                <Main />
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
                <Col span={10} xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <Info />
                </Col>
            </Row>

        </Layout>
    )
}

export default Item