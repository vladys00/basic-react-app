import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import ThemeProvider from './contexts/ThemeContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
