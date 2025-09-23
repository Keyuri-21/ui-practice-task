import { Arrow } from '../SvgIcons';
import './PromotionalSection.scss';

const PromotionalSection = () => {
  return (
    <section className="promotional-section" aria-label="Special offers and promotions">
      <div className="rectangle-4" role="article" aria-labelledby="summer-sale-heading">
        <div className="image">
          <img
            src="./apple.png"
            alt="Fresh red apple with green leaf and apple slice showing crisp white interior"
            loading="lazy"
            width="660"
            height="390"
          />
        </div>
        <div className="details">
          <div className="heading">
            <p id="summer-sale-heading">SUMMER SALE</p>
          </div>
          <div className="offer" aria-label="Special discount offer">
            <div className="per-cent" aria-label="Forty percent off">40%OFF</div>
            <p className="text">Fresh Fruit</p>
            <p className="text">%100</p>
          </div>
          <div className="shop-now">
            <button
              type="button"
              aria-label="Shop now for fresh fruit with 40% discount"
              className="shop-now-btn"
            >
              <span>Shop Now</span>
              <Arrow />
            </button>
          </div>
        </div>
      </div>

      <div className="img-rectangle" role="article" aria-labelledby="fresh-delivered-heading">
        <div className="heading">
          <h2 id="fresh-delivered-heading">
            Fresh Delivered Daily
          </h2>
        </div>
        <div className="cheese-img">
          <img
            src="./cheese.png"
            alt="Assorted premium cheeses including aged cheddar and blue cheese on wooden board"
            loading="lazy"
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;