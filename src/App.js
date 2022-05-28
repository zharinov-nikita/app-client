import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader/AppHeader'
import useMessage from './hooks/useMessage'

import AppLink from './microservices/link/AppLink'
import AppBusiness from './microservices/business/AppBusiness'



const App = () => {
  useMessage()

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path='link' element={<AppLink />} />
        <Route path='business' element={<AppBusiness />} />
      </Routes>
    </>
  )
}

export default App