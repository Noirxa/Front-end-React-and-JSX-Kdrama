import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DramaProvider } from './context/DramaContext' // Importeer de provider

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DramaProvider>
            <App />
        </DramaProvider>
    </StrictMode>,
)