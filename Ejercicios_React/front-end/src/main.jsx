import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Login from './login.jsx';
import activities from './activities.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/activities' element={<activities />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
