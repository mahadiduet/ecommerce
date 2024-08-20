import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={routes}></RouterProvider>
    </FirebaseProvider>
  </StrictMode>,
)
