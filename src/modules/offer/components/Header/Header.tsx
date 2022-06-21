import { FC } from 'react'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { useAppDispatch } from '../../../../core/hooks/useAppDispatch'
import { offerSlice } from '../../store'
import css from './Header.module.css'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const { createForm } = offerSlice.actions

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