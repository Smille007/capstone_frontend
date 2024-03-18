import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SocketProvider } from './Components/Socket/SocketIO.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
    <App />
    </SocketProvider>
  </React.StrictMode>,
)
