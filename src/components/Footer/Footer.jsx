import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* Email Subscription Section */}
            <div className='email-bar'>
                <div className='email-input-wrapper'>
                    <div className='email-input'>
                        <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V3.33333L14.5 10L29 3.33333V0H0ZM0 6.66667V20H29V6.66667L14.5 13.3333L0 6.66667Z" fill="#BAB8AB" />
                        </svg>
                        <input type='email' placeholder='Enter Your Email' />
                    </div>
                    <button className='subscribe-btn'>SUBSCRIBE</button>
                <p className='signup-text'>Sign up for new Customer, updates, surveys</p>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className='footer-content'>
                <div className='footer-section company-section'>
                    <div className="logo">
                        <div className="logo-image">
                            <img src="./logo.png" alt="Green Grocer Logo" />
                        </div>
                        <div className="logo-text">
                            <p>Green Grocer</p>
                        </div>
                    </div>
                    
                    <div className='contact-info'>
                        <h4>CONTACT</h4>
                        <p>Phone : 99988765</p>
                        <p>Email : Greengrocery9@Gmail.Com</p>
                    </div>

                    <div className='payment-methods'>
                        <img src='./cardsLogo.png' alt='cards' className='payment-card ' />
                    </div>
                </div>

                <div className='footer-section'>
                    <h4>SOCIAL MEDIA</h4>
                    <div className='social-links'>
                        <a href="#" className='social-link'>
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1.9165H7C4.23858 1.9165 2 4.06181 2 6.70817V16.2915C2 18.9379 4.23858 21.0832 7 21.0832H17C19.7614 21.0832 22 18.9379 22 16.2915V6.70817C22 4.06181 19.7614 1.9165 17 1.9165Z" stroke="#636362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 10.8961C16.1234 11.6936 15.9812 12.5082 15.5937 13.2239C15.2062 13.9395 14.5931 14.5199 13.8416 14.8824C13.0901 15.2449 12.2384 15.3711 11.4077 15.243C10.5771 15.1149 9.80971 14.739 9.21479 14.1689C8.61987 13.5988 8.22768 12.8634 8.09402 12.0673C7.96035 11.2713 8.09202 10.4551 8.47028 9.73491C8.84854 9.0147 9.45414 8.42714 10.2009 8.05578C10.9477 7.68443 11.7977 7.5482 12.63 7.66647C13.4789 7.78711 14.2648 8.1662 14.8716 8.74776C15.4785 9.32932 15.8741 10.0825 16 10.8961Z" stroke="#636362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.5 6.229H17.5108" stroke="#636362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            INSTAGRAM
                        </a>
                        <a href="#" className='social-link'>
                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 1.01121C23.9553 1.76409 22.7987 2.33993 21.5745 2.71654C20.9175 1.9447 20.0444 1.39763 19.0731 1.14934C18.1019 0.901042 17.0795 0.963498 16.1441 1.32826C15.2087 1.69302 14.4056 2.34249 13.8433 3.18882C13.2809 4.03515 12.9866 5.03751 13 6.06034V7.17494C11.0829 7.22573 9.18321 6.79131 7.47019 5.91037C5.75717 5.02942 4.28398 3.72931 3.18182 2.12581C3.18182 2.12581 -1.18182 12.1572 8.63636 16.6156C6.38967 18.1738 3.71326 18.9551 1 18.8448C10.8182 24.4178 22.8182 18.8448 22.8182 6.0269C22.8172 5.71643 22.788 5.40673 22.7309 5.10178C23.8443 3.97993 24.63 2.56352 25 1.01121Z" stroke="#636362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            TWEETER
                        </a>
                        <a href="#" className='social-link'>
                            <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0002 1.5H12.0002C10.2321 1.5 8.53636 2.15848 7.28612 3.33058C6.03588 4.50269 5.3335 6.0924 5.3335 7.75V11.5H1.3335V16.5H5.3335V26.5H10.6668V16.5H14.6668L16.0002 11.5H10.6668V7.75C10.6668 7.41848 10.8073 7.10054 11.0574 6.86612C11.3074 6.6317 11.6465 6.5 12.0002 6.5H16.0002V1.5Z" stroke="#636362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            FACEBOOK
                        </a>
                    </div>
                </div>

                <div className='footer-section'>
                    <h4>INFORMATION</h4>
                    <div className='footer-links'>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Check Out</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div className='footer-section'>
                    <h4>MY ACCOUNTS</h4>
                    <div className='footer-links'>
                        <a href="#">MY Account</a>
                        <a href="#">Wish List</a>
                        <a href="#">Shopping Cart</a>
                    </div>
                </div>

                <div className='footer-section'>
                    <h4>CATEGORIES</h4>
                    <div className='footer-links'>
                        <a href="#">Fresh Product</a>
                        <a href="#">Snacks</a>
                        <a href="#">Meat</a>
                        <a href="#">Drinks</a>
                        <a href="#">Vegetables</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='footer-bottom'>
                <p>Copyright © 2024 Jahad ALfahdi.</p>
            </div>
        </div>
    )
}

export default Footer