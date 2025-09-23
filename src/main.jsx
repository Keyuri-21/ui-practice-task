import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishListContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)