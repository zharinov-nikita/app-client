import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Link from './microservices/link/Link'
import useMessage from './hooks/useMessage'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Header />
      <Routes>
        <Route path='/link' element={<Link />} />
      </Routes>
    </>
  )
}

export default App