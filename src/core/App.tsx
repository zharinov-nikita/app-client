import React from 'react'
import { Routes, Route } from 'react-router-dom'
import useMessage from './hooks/useMessage'

import Link from '../modules/link/App'
import { Col, Row } from 'antd'
import Menu from './components/Menu/Menu'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Row>
        <Col span={1}>
          <Menu />
        </Col>
        <Col span={23}>
          <Routes>
            <Route path='/link/*' element={<Link />} />
          </Routes>
        </Col>
      </Row>
    </>
  )
}

export default App