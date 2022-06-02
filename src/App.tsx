import React from 'react'
import Header from './components/Header/Header'
import Link from './microservices/link/Link'
import useMessage from './hooks/useMessage'

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