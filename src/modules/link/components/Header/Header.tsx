import { FC } from 'react'

import css from './Header.module.css'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { useAppDispatch } from '../../../../core/hooks/useAppDispatch'
import { linkSlice } from '../../store'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const { createForm } = linkSlice.actions

    return (
        <Row className={css.row}>
            <Col className={css.col} span={24}>
                <Button
                    className={css.button}
                    children={'Создать'}
                    icon={<AppstoreAddOutlined />}
                    onClick={() => dispatch(createForm())}
                />
            </Col>
        </Row>
    )
}

export default Header