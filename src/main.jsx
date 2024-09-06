import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import theme from './styles/theme.js'

import { SignIn } from './pages/SignIn/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  </StrictMode>,
)
