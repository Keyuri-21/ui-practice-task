import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DailyBest.scss';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishListContext';
import { CartIcon, Heart } from '../SvgIcons';

const DailyBest = ({ showAll = false }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();
    const { addToCart, isInCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const products = [
        { id: 1, name: 'Apple', price: '$13.00', rating: 4, image: './apple.png', category: ['fruits', 'top-sell'] },
        { id: 2, name: 'Kiwi', price: '$9.00', rating: 4, image: './kiwi.png', category: ['fruits'] },
        { id: 3, name: 'Banana', price: '$12.00', rating: 4, image: './banana.png', category: ['fruits', 'top-sell'] },
        { id: 4, name: 'Tomato', price: '$10.00', rating: 4, image: './apple.png', category: ['vegetables'] },
        { id: 5, name: 'Spices', price: '$10.00', rating: 4, image: './spices.png', category: ['vegetables', 'new'] },
        { id: 6, name: 'Milk', price: '$5.00', rating: 4, image: './milk.png', category: ['new'] },
        { id: 7, name: 'Cheese', price: '$15.00', rating: 4, image: './cheese.png', category: ['new'] },
        { id: 8, name: 'Water', price: '$3.00', rating: 4, image: './water.png', category: ['new'] },
        { id: 9, name: 'Apple', price: '$13.00', rating: 4, image: './apple.png', category: ['fruits', 'top-sell'] },
        { id: 10, name: 'Kiwi', price: '$9.00', rating: 4, image: './kiwi.png', category: ['fruits'] },
        { id: 11, name: 'Banana', price: '$12.00', rating: 4, image: './banana.png', category: ['fruits', 'top-sell'] },
        { id: 12, name: 'Tomato', price: '$10.00', rating: 4, image: './apple.png', category: ['vegetables'] },
        { id: 13, name: 'Spices', price: '$10.00', rating: 4, image: './spices.png', category: ['vegetables', 'new'] },
        { id: 14, name: 'Milk', price: '$5.00', rating: 4, image: './milk.png', category: ['new'] },
        { id: 15, name: 'Cheese', price: '$15.00', rating: 4, image: './cheese.png', category: ['new'] },
    ];

    const menuItems = [
        { key: 'all', label: 'All' },
        { key: 'top-sell', label: 'Top Sell' },
        { key: 'new', label: 'New' },
        { key: 'vegetables', label: 'Vegetables' },
        { key: 'fruits', label: 'Fruits' }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category.includes(activeCategory));

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleAddToCart = (product, event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isInCart(product.id)) {
            addToCart(product);
        }
    };

    const handleWishlistToggle = (product, event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(product);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <img
                key={i}
                src={i < rating ? './filledStar.png' : './emptyStar.png'}
                alt='star'
            />
        ));
    };

    return (
        <div className='daily-container'>
            <div className='header-section'>
                <div className='title'>
                    <h4>Daily Best Sell</h4>
                </div>

                <div className='menu'>
                    {menuItems.map((item) => (
                        <div
                            key={item.key}
                            className={`options ${activeCategory === item.key ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(item.key)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>

            <div className='list-container'>
                <div className='items-grid'>
                    {(showAll ? filteredProducts : filteredProducts.slice(0, 8)).map((product) => (
                        <div key={product.id} className='item-card'>
                            <div className='product-image-wrapper'>
                                <img src={product.image} alt={product.name} className='product-image' />
                            </div>

                            <div className='product-info'>
                                <div className='title'>
                                    <div className='item-title'>
                                        <h6>{product.name}</h6>
                                        <p className='price'>{product.price}</p>
                                    </div>
                                    <div className='action-area'>
                                        {isInCart(product.id) ? (
                                            <span className='added-to-cart-text'>Added to Cart</span>
                                        ) : (
                                            <div
                                                className='cart-button'
                                                onClick={(e) => handleAddToCart(product, e)}
                                                title='Add to cart'
                                            >
                                                <CartIcon />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='bottom-section'>
                                    <div className='rating'>
                                        {renderStars(product.rating)}
                                    </div>
                                    <div
                                        className={isInWishlist(product.id)? 'added' : 'wishlist-button'}
                                        onClick={(e) => handleWishlistToggle(product, e)}
                                        title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                                    >
                                        {isInWishlist(product.id) ? (
                                            <img
                                            src='./love.png'
                                            alt='Added'
                                            />
                                        ) : (
                                            <img
                                                src='./heart.png'
                                                alt='Add to wishlist'
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className='show-more'>
                        <button onClick={() => navigate('/dailybest')}>Show More</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DailyBest;