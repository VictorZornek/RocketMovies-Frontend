import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global.js'

import theme from './styles/theme.js'

import { Profile } from './pages/Profile/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </StrictMode>,
)
