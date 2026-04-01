import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Survey from './pages/Survey.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Survey />
  </StrictMode>,
)
