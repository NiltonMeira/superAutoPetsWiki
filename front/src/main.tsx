import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme.ts'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/mainRoutes.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={MainRoutes} />
    </ThemeProvider>
    <ToastContainer/>

  </StrictMode>,
)
