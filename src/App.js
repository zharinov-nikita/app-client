import React from 'react'
import { Route, Routes } from 'react-router-dom'
import useMessage from './hooks/useMessage'
import Header from './components/Header/Header'
import Link from './microservices/link/Link'





const App = () => {
  useMessage()
  return (
    <>
      <Header />
      <Routes>
        <Route path='link' element={<Link />} />
      </Routes>
    </>
  )
}

export default App