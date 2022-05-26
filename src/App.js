import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import useMessage from './hooks/useMessage'
import AppLink from './microservices/link/AppLink'




const App = () => {
  useMessage()

  return (
    <>
      <AppHeader />
      <AppLink />
    </>
  )
}

export default App