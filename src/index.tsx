import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import 'antd/dist/antd.css'

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
