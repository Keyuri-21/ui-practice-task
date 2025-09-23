import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('greenGrocerWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('greenGrocerWishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const existingItem = wishlistItems.find(item => item.id === product.id);
    
    if (!existingItem) {
      setWishlistItems([...wishlistItems, product]);
      showNotification(`${product.name} added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    const existingItem = wishlistItems.find(item => item.id === product.id);
    
    if (existingItem) {
      removeFromWishlist(product.id);
      showNotification(`${product.name} removed from wishlist!`);
    } else {
      addToWishlist(product);
    }
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    getWishlistCount,
    isInWishlist,
    clearWishlist,
    notification
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};