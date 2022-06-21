import { BarChartOutlined, BranchesOutlined, LinkOutlined, SettingOutlined } from '@ant-design/icons'
import { Row } from 'antd'
import { FC } from 'react'
import Item, { MenuItemPropsType } from './Item/Item'
import css from './Menu.module.css'


const items: MenuItemPropsType[] = [
    { to: '/project', name: 'проекты', icon: <BarChartOutlined className={css.icon} /> },
    { to: '/offer', name: 'офферы', icon: <LinkOutlined className={css.icon} /> },
    { to: '/analytics', name: 'статистика', icon: <BranchesOutlined className={css.icon} /> },
    { to: '/setting', name: 'настройки', icon: <SettingOutlined className={css.icon} /> },
]

const Menu: FC = () => {
    return (
        <Row className={css.list}>
            {items.map(item => <Item key={item.to} to={item.to} name={item.name} icon={item.icon} />)}
        </Row>
    )
}

export default Menu