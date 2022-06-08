import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import useMessage from './hooks/useMessage'

import Link from './microservices/link/Link'
import Process from './microservices/process/Process'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Header />
      <Routes>
        <Route path='/link' element={<Link />} />
        <Route path='/process' element={<Process />} />
      </Routes>
    </>
  )
}

export default App