import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DailyBest.scss';

const DailyBest = ({ showAll = false }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();

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
                                
                                {/* Cart button */}
                                    <svg
                                        className='cart-button'
                                        viewBox="0 0 58 57"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse cx="29" cy="28.5" rx="29" ry="28.5" fill="#D6ECAC" />
                                        <path d="M13.5328 15.815C13.0186 15.8968 12.5581 16.1786 12.2526 16.5983C11.9472 17.0179 11.8218 17.5411 11.9041 18.0528C11.9863 18.5644 12.2695 19.0226 12.6914 19.3265C13.1132 19.6304 13.6391 19.7552 14.1533 19.6733H19.9703L20.3193 20.6379L21.9093 25.4608L23.4993 30.2837C23.6544 30.7853 24.3137 31.2483 24.8178 31.2483H38.3908C38.9337 31.2483 39.5542 30.7853 39.7093 30.2837L42.8505 20.6379C43.0056 20.1363 42.7729 19.6733 42.23 19.6733H25.0117L23.5381 16.8953C23.3811 16.5764 23.1388 16.3069 22.8377 16.1162C22.5366 15.9256 22.1885 15.8214 21.8317 15.815L14.0757 15.815C13.9596 15.8045 13.8428 15.8045 13.7267 15.815C13.6492 15.8103 13.5715 15.8103 13.494 15.815L13.5328 15.815ZM25.7873 35.1067C24.7015 35.1067 23.8483 35.9555 23.8483 37.0359C23.8483 38.1162 24.7015 38.965 25.7873 38.965C26.8731 38.965 27.7263 38.1162 27.7263 37.0359C27.7263 35.9555 26.8731 35.1067 25.7873 35.1067ZM37.4213 35.1067C36.3355 35.1067 35.4823 35.9555 35.4823 37.0359C35.4823 38.1162 36.3355 38.965 37.4213 38.965C38.5071 38.965 39.3603 38.1162 39.3603 37.0359C39.3603 35.9555 38.5071 35.1067 37.4213 35.1067Z" fill="black" />
                                    </svg>
                            </div>

                            <div className='product-info'>
                                <h6>{product.name}</h6>
                                <p className='price'>{product.price}</p>

                                <div className='rating-section'>
                                    <div className='rating'>
                                        {renderStars(product.rating)}
                                    </div>
                                    <img
                                        className='wishlist-button'
                                        src='./heart.png'
                                        alt='Add to wishlist'
                                    />
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
