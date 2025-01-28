import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterProvider } from './Context/Counter.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<CounterProvider>
    <App />
    </CounterProvider>
  </StrictMode>,
)
