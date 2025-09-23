import { useRef, useState, useEffect } from 'react';
import './TopCategory.scss';
import { ArrowLeft, ArrowRight } from '../SvgIcons';

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
          <ArrowLeft canScrollLeft={canScrollLeft} scroll={scroll} className='arrow-left' />
          <ArrowRight canScrollRight={canScrollRight} scroll={scroll}  className='arrow-right'/>
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