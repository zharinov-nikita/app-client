import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import useMessage from './hooks/useMessage'

import Link from './microservices/link/Link'
import Project from './microservices/project/Project'
import ProjectItem from './microservices/project/components/Item/Item'

const App: React.FC = () => {
  useMessage()
  return (
    <>
      <Header />
      <Routes>
        <Route path='/link' element={<Link />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:_id' element={<ProjectItem />} />
      </Routes>
    </>
  )
}

export default App