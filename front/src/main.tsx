import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme.ts'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/mainRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={MainRoutes}/>
      </ThemeProvider>
  </StrictMode>,
)
