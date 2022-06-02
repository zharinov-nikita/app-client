import React from 'react'
import Header from './components/Header/Header'
import useMessage from './hooks/useMessage'
import Link from './microservices/link/Link'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Header />
      <Link />
    </>
  )
}

export default App