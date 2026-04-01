import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Survey from './pages/Survey.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/thebuybox-site">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
