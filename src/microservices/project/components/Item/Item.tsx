import React, { useState } from 'react'
import css from './Item.module.css'
import { Card, Col, Layout, Row, Typography } from 'antd'

import { Tabs } from 'antd'

import Main from './Key/Main'
import Extra from './Key/Extra'
import { projectSlice } from '../../store/project'
import { useAppDispatch } from '../../../../hooks/redux'

const { TabPane } = Tabs
const { Text, Link } = Typography







const Item: React.FC = () => {
    const [tab, setTab] = useState<boolean>(false)
    const { addExtraKey } = projectSlice.actions
    const dispatch = useAppDispatch()

    const onChange = (key: string) => {
        if (key === 'extra') {
            setTab(true)
        } else {
            setTab(false)
        }
    }

    return (
        <Layout className={css.itemLayout}>
            <Row gutter={[16, 16]}>
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                    <Card
                        title='Сео'
                        extra={(tab) && <Link children='Добавить' onClick={() => dispatch(addExtraKey({ id: Date.now(), value: '', frequency: 0 }))} />}
                    >
                        <Tabs onChange={onChange}>
                            <TabPane tab='Главный' key={'main'}>
                                <Main />
                            </TabPane>
                            <TabPane tab='Дополнительные' key={'extra'}>
                                <Extra />
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>

        </Layout>
    )
}

export default Item