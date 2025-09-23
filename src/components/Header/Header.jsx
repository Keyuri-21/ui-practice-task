import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.scss';
import { Cart, Heart, Search } from '../SvgIcons';

const Header = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartCount();
  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className={'header'}>
      <div className="logo">
        <div className="logo-icon">
          <img src="./logo.png" alt="Green Grocer Logo" />
        </div>
        <div className="logo-text">
          <p>Green Grocer</p>
        </div>
      </div>

      <div className="navigation">
        <a href='/' className="nav-item">Home</a>
        <a className="nav-item">Shop</a>
        <a className="nav-item">About</a>
      </div>

      <div className="search-container">
        <div className="search-box">
          <Search />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header-actions">
        <div className="action-icons">
          <div className="heart-icon">
            <Heart />
          </div>
          <div className="cart-icon" onClick={handleCartClick}>
            <div className="cart-icon-container" >
              <Cart />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
          </div>
        </div>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;