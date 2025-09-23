import { useNavigate } from 'react-router-dom';
import './WishListPage.scss';
import { useWishlist } from '../../context/WishListContext';
import { BackArrow, CloseIcon } from '../../components/SvgIcons';

const WishlistPage = () => {
  const { 
    wishlistItems, 
    removeFromWishlist, 
    clearWishlist 
  } = useWishlist();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="back-button" onClick={handleBackClick}>
            <BackArrow/>
          Back
        </div>

        <div className="wishlist-content">
          <div className="wishlist-left">
            <div className="wishlist-header">
              <h2>My Wishlist</h2>
            </div>

            {wishlistItems.length === 0 ? (
              <div className="empty-wishlist">
                <h3>Your wishlist is empty</h3>
                <p>Add some items to your wishlist to see them here!</p>
              </div>
            ) : (
              <>
                <div className="table-header">
                  <div className="header-product">Product</div>
                  <div className="header-price">Price</div>
                  <div className="header-action">
                    <button className="clear-all-btn" onClick={clearWishlist}>
                      Clear all
                    </button>
                  </div>
                </div>
                <div className="wishlist-items">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-item">
                      <div className="item-product">
                        <div className="product-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="product-info">
                          <h4>{item.name}</h4>
                          <p className="product-category">{item.category[0]}</p>
                        </div>
                      </div>

                      <div className="item-price">
                        {item.price}
                      </div>

                      <div className="item-actions">
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;