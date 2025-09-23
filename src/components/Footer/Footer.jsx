import { Email, Facebook, Instagram, Tweeter } from '../SvgIcons'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* Email Subscription Section */}
            <div className='email-bar'>
                <div className='email-input-wrapper'>
                    <div className='email-input'>
                        <Email />
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
                            <Instagram />
                            INSTAGRAM
                        </a>
                        <a href="#" className='social-link'>
                            <Tweeter />
                            TWEETER
                        </a>
                        <a href="#" className='social-link'>
                            <Facebook />
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