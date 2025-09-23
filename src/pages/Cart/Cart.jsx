import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();
  console.log(cartItems)
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleBackClick = () => {
    navigate('/');
  };

  const subtotal = parseFloat(getCartTotal());
  const total = subtotal;

  const BackArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="black"/>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#E5E5E5"/>
      <path d="M6 12H18" stroke="black" strokeWidth="1.5"/>
      <path d="M12 6L12 18" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const MinusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#E5E5E5"/>
      <path d="M6 12H18" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1499 4.8075L14.0924 3.75L9.8999 7.9425L5.7074 3.75L4.6499 4.8075L8.8424 9L4.6499 13.1925L5.7074 14.25L9.8999 10.0575L14.0924 14.25L15.1499 13.1925L10.9574 9L15.1499 4.8075Z" fill="#666666"/>
    </svg>
  );

  const RadioUnchecked = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" stroke="#666666"/>
    </svg>
  );

  const RadioChecked = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" stroke="#666666"/>
      <circle cx="12" cy="12" r="6" fill="#22c55e"/>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="black"/>
    </svg>
  );

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="back-button" onClick={handleBackClick}>
          <BackArrow />
          <span>Back</span>
        </div>

        <div className="cart-content">
          <div className="cart-left">
            <div className="cart-header">
              <h2>Shopping Card</h2>
              <button className="continue-shopping">
                Continue shopping &gt;
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="table-header">
                  <div className="header-product">product</div>
                  <div className="header-quantity">Quantity</div>
                  <div className="header-price">Total Price</div>
                  <div className="header-action">
                    <button className="clear-all-btn" onClick={clearCart}>
                      Clear all
                    </button>
                  </div>
                </div>

                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-product">
                        <div className="product-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="product-info">
                          <h4>{item.name}</h4>
                          <p className="product-category">{item.category[0]}</p>
                        </div>
                      </div>

                      <div className="item-quantity">
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn minus"
                          >
                            <MinusIcon />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn plus"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                      </div>

                      <div className="item-price">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </div>

                      <div className="item-action">
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary-left">
                  <div className="summary-row">
                    <span>Subtotal :</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping :</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total :</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="cart-right">
            <div className="payment-card">
              <h3>Shopping Card</h3>
              
              <div className="payment-method">
                <label>Payment Method:</label>
                <div className="payment-options">
                  <div className="payment-option">
                    <div className="radio-wrapper" onClick={() => setPaymentMethod('google-pay')}>
                      {paymentMethod === 'google-pay' ? <RadioChecked /> : <RadioUnchecked />}
                    </div>
                    <div className="payment-label">
                      <img className='google' src='./google.png' alt="Google Pay" />
                      <span>Google Pay</span>
                    </div>
                  </div>
                  <div className="payment-option">
                    <div className="radio-wrapper" onClick={() => setPaymentMethod('credit-card')}>
                      {paymentMethod === 'credit-card' ? <RadioChecked /> : <RadioUnchecked />}
                    </div>
                    <div className="payment-label">
                      <CreditCardIcon />
                      <span>Credit Card</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Name On Card</label>
                <input type="text" placeholder="Enter name on card" />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="Enter name on card" />
              </div>

              <div className="form-row">
                <div className="form-group expiration-group">
                  <label>Expiration Date</label>
                  <input type="text" placeholder="Enter expiration date" />
                </div>
                <div className="form-group cvv-group">
                  <label>CVV</label>
                  <input type="text" placeholder="Enter CVV" />
                </div>
              </div>

              <button className="checkout-btn">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;