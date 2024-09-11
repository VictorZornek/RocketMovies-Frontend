import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import theme from './styles/theme.js'

import { NewMovie } from './pages/NewMovie/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewMovie />
    </ThemeProvider>
  </StrictMode>,
)
