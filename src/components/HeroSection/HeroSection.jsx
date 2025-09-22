import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="main-content">
      <div className="content-left">
        <div className="heading">
          <h1>Your Ultimate Online <span>Grocery</span></h1>
          <p>Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials</p>
        </div>
        <div className="learn-more">
          <button>Learn More</button>
        </div>
      </div>
      <div className="content-right">
        <div className="fruit-imag">
          <img src="./fruitBasket.png" alt="Fruit basket" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;