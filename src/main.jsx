import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import './global.css'
import router from './Routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div>
        <RouterProvider
          router={router}>
        </RouterProvider>
      </div>
    </HelmetProvider>
  </StrictMode>,
)
