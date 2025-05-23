import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/useAuth.jsx'

import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/common/scrollToTop.jsx'
import ModalProvider from './context/useModal.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <App />
      </BrowserRouter>
    </ModalProvider>
  </AuthProvider>
)
