import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import useMessage from './hooks/useMessage'

import Link from '../module/link/App'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Header />
      <Routes>
        <Route path='/link/*' element={<Link />} />
      </Routes>
    </>
  )
}

export default App