import './TopCategory.scss';

const TopCategory = () => {
  return (
    <div className='top-container'>
      <div className="top-category">
        <div className='title'>
          <h2>Top Category</h2>
        </div>
        <div className='nav-btns'>
          <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_158_50)">
              <circle cx="42" cy="38" r="22" fill="white" />
            </g>
            <path d="M37 40.4332V37.9332L47 33.5298V36.4062L40.1534 39.1548L40.2457 39.0057V39.3608L40.1534 39.2116L47 41.9602V44.8366L37 40.4332Z" fill="black" />
            <defs>
              <filter id="filter0_d_158_50" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_158_53)">
              <circle cx="42" cy="38" r="22" fill="white" />
            </g>
            <path d="M50 39.4332L40 43.8366V40.9602L46.8466 38.2116L46.7543 38.3608V38.0057L46.8466 38.1548L40 35.4062V32.5298L50 36.9332V39.4332Z" fill="black" />
            <defs>
              <filter id="filter0_d_158_53" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
      <div className='items'>
        <div className='fruits'>
          <img src='./fruits.png'></img>
          <p>Fruits</p>
        </div>
        <div className='veges'>
          <img src='./veges.png'></img>
          <p>Vegetable</p>
        </div>
        <div className='meat'>
          <img src='./meat.png'></img>
          <p>Meat</p>
        </div>
        <div className='snacks'>
          <img src='./snacks.png'></img>
          <p>Snacks</p>
        </div>
        <div className='milk'>
          <img src='./milk.png'></img>
          <p>Milk</p>
        </div>
      </div>

    </div>

  );
};

export default TopCategory;