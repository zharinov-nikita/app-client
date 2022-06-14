import { AppstoreAddOutlined, FileAddOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from '../../core/hooks/useAppDispatch'

import Main from './pages/Main/Main'
import { linkSlice } from './store'

const App: FC = () => {
    const dispatch = useAppDispatch()
    const { createForm } = linkSlice.actions
    return (
        <>
            <Row style={{ minHeight: 52, display: 'flex', alignItems: 'center', padding: '0px 16px' }}>
                <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                    <Button
                        children={'Создать'}
                        style={{ background: '#f5f5f5', fontSize: 14, color: '#595959', borderRadius: 4 }}
                        icon={<AppstoreAddOutlined />}
                        onClick={() => dispatch(createForm())}
                    />
                </Col>
            </Row>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </>
    )
}

export default App