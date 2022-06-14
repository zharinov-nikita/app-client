import React, { FC } from 'react'
import { Col } from 'antd'
import { Link } from 'react-router-dom'
import css from '../Menu.module.css'


export type MenuItemPropsType = {
    to: string
    name: string
    icon: React.ReactNode
}

const Item: FC<MenuItemPropsType> = ({ to, name, icon }) => {
    return (
        <Col span={24} className={css.item}>
            <Link to={to} className={css.link}>
                <div className={css.box} >
                    {icon}
                    <span className={css.name}>{name}</span>
                </div>
            </Link>
        </Col>
    )
}

export default Item
