import './index.css'

import ClockPage from './pages/ClockPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <ClockPage />
    </ThemeProvider>
  </React.StrictMode>,
)
