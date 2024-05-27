import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Text from './text.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header />
    <Text/>

  </React.StrictMode>,
)
