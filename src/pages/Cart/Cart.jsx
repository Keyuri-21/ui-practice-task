import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Cart.scss';
import { BackArrow, CloseIcon, CreditCardIcon, MinusIcon, PlusIcon, RadioChecked, RadioUnchecked } from '../../components/SvgIcons';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleBackClick = () => {
    navigate('/');
  };

  const subtotal = parseFloat(getCartTotal());
  const total = subtotal;

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