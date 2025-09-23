import { Payment, Refund, Shipping, Support } from '../SvgIcons';
import './Services.scss';

const Services = () => {
  const servicesData = [
    {
      id: 'support',
      icon: (<Support />),
      title: 'Support 24 h',
      description: 'Dedicated Support',
      ariaLabel: '24 hour customer support with dedicated assistance'
    },
    {
      id: 'payment',
      icon: (
        <Payment />
      ),
      title: 'Secure Payment',
      description: 'ensure your money is safe',
      ariaLabel: 'Secure payment processing to ensure your money is safe'
    },
    {
      id: 'refund',
      icon: (
        <Refund />
      ),
      title: 'Refundable',
      description: 'Damage items can refund it',
      ariaLabel: 'Refund policy for damaged items'
    },
    {
      id: 'shipping',
      icon: (
        <Shipping />
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