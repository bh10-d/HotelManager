import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import NavBar from './components/layout/Navbar/Navbar.tsx'
// import { createBrowserRouter } from "react-router";

// createBrowserRouter

import { RouterProvider } from 'react-router-dom'
import router from './routes/publicRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NavBar/>
    <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
