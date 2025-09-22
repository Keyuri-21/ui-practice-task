import './Banner.scss';

const Banner = () => {
  return (
    <section className="banner-container" aria-label="Eco-friendly products banner">
      <div className="banner">
        <div className="left">
          <img
            src="./vegesBasket.png"
            alt="veges basket"
            width="400"
            height="380"
          />
        </div>

        <div className="right">
          <h4><span>ECO</span>-Friendly</h4>
          <p>
            Discover a vibrant array of locally sourced and
            eco-friendly products on our grocery web store,
            connecting you with sustainable choices that
            support both the community and the planet.
          </p>
          <div className="learn-more">
            <button>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
