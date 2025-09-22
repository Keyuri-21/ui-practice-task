import './Services.scss';

const Services = () => {
  const servicesData = [
    {
      id: 'support',
      icon: (
        <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6.68066 26.25V17.5C6.68066 14.019 8.26431 10.6806 11.0832 8.21922C13.9021 5.75781 17.7254 4.375 21.7119 4.375C25.6984 4.375 29.5217 5.75781 32.3406 8.21922C35.1595 10.6806 36.7431 14.019 36.7431 17.5V26.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36.7431 30.625C36.7431 31.3985 36.3912 32.1404 35.7648 32.6874C35.1384 33.2344 34.2888 33.5416 33.4029 33.5416H31.7327C30.8468 33.5416 29.9972 33.2344 29.3708 32.6874C28.7444 32.1404 28.3925 31.3985 28.3925 30.625V26.25C28.3925 25.4764 28.7444 24.7346 29.3708 24.1876C29.9972 23.6406 30.8468 23.3333 31.7327 23.3333H36.7431V30.625ZM6.68066 30.625C6.68066 31.3985 7.03258 32.1404 7.65901 32.6874C8.28543 33.2344 9.13504 33.5416 10.0209 33.5416H11.6911C12.577 33.5416 13.4266 33.2344 14.053 32.6874C14.6794 32.1404 15.0314 31.3985 15.0314 30.625V26.25C15.0314 25.4764 14.6794 24.7346 14.053 24.1876C13.4266 23.6406 12.577 23.3333 11.6911 23.3333H6.68066V30.625Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Support 24 h',
      description: 'Dedicated Support',
      ariaLabel: '24 hour customer support with dedicated assistance'
    },
    {
      id: 'payment',
      icon: (
        <svg width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.4166 41.9166C18.4166 41.9166 35.7499 33.75 35.7499 21.5V7.20831L18.4166 1.08331L1.08325 7.20831V21.5C1.08325 33.75 18.4166 41.9166 18.4166 41.9166Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Secure Payment',
      description: 'ensure your money is safe',
      ariaLabel: 'Secure payment processing to ensure your money is safe'
    },
    {
      id: 'refund',
      icon: (
        <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M37.75 2.83331V13.8333H27.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.08325 32.1666V21.1666H11.0833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.26659 12C6.11186 9.37244 7.54847 7.02323 9.44236 5.1716C11.3363 3.31996 13.6257 2.02623 16.0971 1.41114C18.5684 0.79604 21.1412 0.879622 23.5752 1.65408C26.0093 2.42854 28.2253 3.86864 30.0166 5.84L37.7499 13.8333M1.08325 21.1667L8.81659 29.16C10.6078 31.1314 12.8239 32.5715 15.2579 33.3459C17.692 34.1204 20.2647 34.204 22.7361 33.5889C25.2075 32.9738 27.4969 31.68 29.3908 29.8284C31.2847 27.9768 32.7213 25.6276 33.5666 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Refundable',
      description: 'Damage items can refund it',
      ariaLabel: 'Refund policy for damaged items'
    },
    {
      id: 'shipping',
      icon: (
        <svg width="35" height="47" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g clipPath="url(#clip0_172_208)">
            <path d="M30.5 15.6667V41.125H5V15.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.3334 5.875H2.16675V15.6667H33.3334V5.875Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.9167 23.5H20.5834" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_172_208">
              <rect width="34" height="47" fill="white" transform="translate(0.75)" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Free Shipping',
      description: 'Order above 405',
      ariaLabel: 'Free shipping on orders above $405'
    }
  ];

  return (
    <section className="service-container" aria-label="Our services and guarantees">
      <div className="serices" role="list">
        {servicesData.map((service) => (
          <article 
            key={service.id}
            className={service.id}
            role="listitem"
            aria-label={service.ariaLabel}
          >
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <div className={`${service.id}-text`}>
              <h6>{service.title}</h6>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;