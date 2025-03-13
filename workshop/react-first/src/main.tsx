import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import List from './components/list.jsx'
import SwitchListSecondary from './components/SwitchListSecondary.jsx'
import Login from './components/login.jsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login></Login>
    {/* <SwitchListSecondary></SwitchListSecondary> */}
  </StrictMode>,
)
