import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader/AppHeader'
import useMessage from './hooks/useMessage'

import AppLink from './microservices/link/AppLink'
import AppBusiness from './microservices/business/AppBusiness'

import BusinessSeo from './microservices/business/stages/BusinessSeo/BusinessSeo'
import BusinessContent from './microservices/business/stages/BusinessContent/BusinessContent'
import BusinessDomain from './microservices/business/stages/BusinessDomain/BusinessDomain'
import BusinessIntegration from './microservices/business/stages/BusinessIntegration/BusinessIntegration'
import BusinessPromotion from './microservices/business/stages/BusinessPromotion/BusinessPromotion'


const App = () => {
  useMessage()

  return (
    <>
      <AppHeader />
      <Routes>
        <Route path='link' element={<AppLink />} />
        <Route path='business' element={<AppBusiness />} />
        <Route path='business/seo/:_id' element={<BusinessSeo />} />
        <Route path='business/content/:_id' element={<BusinessContent />} />
        <Route path='business/domain/:_id' element={<BusinessDomain />} />
        <Route path='business/integration/:_id' element={<BusinessIntegration />} />
        <Route path='business/promotion/:_id' element={<BusinessPromotion />} />
      </Routes>
    </>
  )
}

export default App