import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import { MyContext } from './myContext.js'

import theme from './styles/theme.js'

import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{ email: 'victor@email.com' }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </StrictMode>,
)
