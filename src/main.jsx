import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Questions from './Pages/Qus_Ans.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Questions/>

  </StrictMode>,
)
