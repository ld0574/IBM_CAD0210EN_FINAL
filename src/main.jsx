import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 导入 Redux Provider 组件，用于提供全局状态访问
import { Provider } from 'react-redux'
// 导入 Redux store
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 使用 Provider 包裹应用，使所有组件都能访问 Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
