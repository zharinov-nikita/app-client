import { FC } from 'react'
import css from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import useMessage from './hooks/useMessage'
import { Col, Row } from 'antd'
import Menu from './components/Menu/Menu'
import Link from '../modules/link/App'

const App: FC = () => {
  useMessage()
  return (
    <Row>
      <Col className={css.menu} >
        <Menu />
      </Col>
      <Col className={css.app}>
        <Routes>
          <Route path='/link/*' element={<Link />} />
        </Routes>
      </Col>
    </Row>
  )
}

export default App