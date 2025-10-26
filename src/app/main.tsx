import App from '@/app/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@shared/assets/fonts/fonts.scss'
import '@app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
