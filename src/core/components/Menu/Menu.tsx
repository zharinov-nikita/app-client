import { BarChartOutlined, BranchesOutlined, CiOutlined, LinkOutlined, SettingOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { FC, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import css from './Menu.module.css'

const Menu: FC = () => {

    return (
        <Row>
            <Col span={24} style={{ cursor: 'pointer' }} className={css.item}>
                <Link to={'/project'} style={{ color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 52 }}>
                        <BranchesOutlined style={{ fontSize: 18 }} />
                    </div>
                </Link>
            </Col>
            <Col span={24} style={{ cursor: 'pointer' }} className={css.item}>
                <Link to={'/link'} style={{ color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 52 }}>
                        <LinkOutlined style={{ fontSize: 18 }} />
                    </div>
                </Link>
            </Col>
            <Col span={24} style={{ cursor: 'pointer' }} className={css.item}>
                <Link to={'/analytics'} style={{ color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 52 }}>
                        <BarChartOutlined style={{ fontSize: 18 }} />
                    </div>
                </Link>
            </Col>
            <Col span={24} style={{ cursor: 'pointer' }} className={css.item}>
                <Link to={'/setting'} style={{ color: 'inherit' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 52 }}>
                        <SettingOutlined style={{ fontSize: 18 }} />
                    </div>
                </Link>
            </Col>
        </Row>
    )
}

export default Menu