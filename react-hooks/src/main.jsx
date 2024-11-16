import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx'
import ToggleButton from './toggleButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleButton />
  </StrictMode>,
)
