import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { ProductProvider } from './core'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
     <ProductProvider>
      <App />
     </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
