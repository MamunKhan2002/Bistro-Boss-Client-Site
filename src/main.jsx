import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import './global.css'
import router from './Routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <RouterProvider
        router={router}>
      </RouterProvider>
    </div>
  </StrictMode>,
)
