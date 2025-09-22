import React, { useRef, useState, useEffect } from 'react';
import './TopCategory.scss';

const TopCategory = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = [
    { id: 'fruits', name: 'Fruits', image: './fruits.png' },
    { id: 'veges', name: 'Vegetable', image: './veges.png' },
    { id: 'meat', name: 'Meat', image: './meat.png' },
    { id: 'snacks', name: 'Snacks', image: './snacks.png' },
    { id: 'milk', name: 'Milk', image: './milk.png' },
    { id: 'fruits', name: 'Fruits', image: './fruits.png' },
    { id: 'veges', name: 'Vegetable', image: './veges.png' },
    { id: 'meat', name: 'Meat', image: './meat.png' },
    { id: 'snacks', name: 'Snacks', image: './snacks.png' },
    { id: 'milk', name: 'Milk', image: './milk.png' },
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      scrollContainerRef.current.style.cursor = 'grabbing';
      scrollContainerRef.current.style.userSelect = 'none';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (scrollContainerRef.current) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging && scrollContainerRef.current) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  const handleTouchStart = (e) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className='top-container'>
      <div className="top-category">
        <div className='title'>
          <h2>Top Category</h2>
        </div>
        <div className='nav-btns'>
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => canScrollLeft && scroll('left')}
          >
            <g filter="url(#filter0_d_158_50)">
              <circle cx="42" cy="38" r="22" fill={canScrollLeft ? "white" : "#f5f5f5"} />
            </g>
            <path d="M37 40.4332V37.9332L47 33.5298V36.4062L40.1534 39.1548L40.2457 39.0057V39.3608L40.1534 39.2116L47 41.9602V44.8366L37 40.4332Z" fill={canScrollLeft ? "black" : "#ccc"} />
            <defs>
              <filter id="filter0_d_158_50" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_50" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_50" result="shape" />
              </filter>
            </defs>
          </svg>
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`nav-btn ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => canScrollRight && scroll('right')}
          >
            <g filter="url(#filter0_d_158_53)">
              <circle cx="42" cy="38" r="22" fill={canScrollRight ? "white" : "#f5f5f5"} />
            </g>
            <path d="M50 39.4332L40 43.8366V40.9602L46.8466 38.2116L46.7543 38.3608V38.0057L46.8466 38.1548L40 35.4062V32.5298L50 36.9332V39.4332Z" fill={canScrollRight ? "black" : "#ccc"} />
            <defs>
              <filter id="filter0_d_158_53" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_53" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_53" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className={`items scrollable ${isDragging ? 'dragging' : ''}`}
        onScroll={checkScrollButtons}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className={category.id}
            onClick={handleCardClick}
          >
            <img
              src={category.image}
              alt={category.name}
              draggable="false"
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;