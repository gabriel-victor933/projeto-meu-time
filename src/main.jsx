import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './style/reset.jsx'
import Global from './style/Global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>,
)
