import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './cart.css'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <Helmet>
        <title>Cart - Thick Fancy Echidna</title>
        <meta property="og:title" content="Cart - Thick Fancy Echidna" />
      </Helmet>
      <div className="cart-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer cart-navbar-interactive"
        >
          <span className="logo">MOTELLY</span>
          <div data-thq="thq-navbar-nav" className="cart-desktop-menu">
            <nav className="cart-links">
              <Link to="/" className="cart-home-link bodySmall">
                Home
              </Link>
              <Link to="/rooms" className="cart-rooms-link bodySmall">
                Rooms
              </Link>
            </nav>
            <div className="cart-buttons">
              <Link to="/sign-up-page1" className="cart-login buttonFlat">
                Login
              </Link>
              <Link to="/sign-up" className="cart-register buttonFilled">
                Register
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="cart-burger-menu">
            <svg viewBox="0 0 1024 1024" className="cart-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="cart-mobile-menu1 mobileMenu"
          >
            <div className="cart-nav">
              <div className="cart-top">
                <span className="logo">MOTELLY</span>
                <div data-thq="thq-close-menu" className="cart-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="cart-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="cart-links1">
                <span className="cart-nav12 bodySmall">Home</span>
                <span className="cart-nav22 bodySmall">Rooms</span>
                <span className="cart-nav32 bodySmall">Login</span>
                <span className="cart-nav42 bodySmall">Sign Up</span>
                <span className="cart-nav52 bodySmall">Cart</span>
              </nav>
              <div className="cart-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="cart-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="cart-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="cart-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="cart-hero"></div>
      <div className="cart-faq">
        <div className="cart-faq-container faqContainer"></div>
      </div>
      <div className="cart-gallery-card">
        <div className="cart-mac-book-pro141">
          <div className="cart-payment-details">
            <span className="cart-payment-title">
              <span>Let’s Make Payment</span>
            </span>
            <span className="cart-payment-subtitle-1">
              <span>Cardholder’s Name</span>
            </span>
            <span className="cart-payment-subtitle-2">
              <span>Card Number</span>
            </span>
            <span className="cart-payment-subtitle-3">
              <span>Expiry</span>
            </span>
            <span className="cart-payment-subtitle-4">
              <span>CVC</span>
            </span>
          </div>
          <div className="cart-circle-designs">
            <img
              alt="Ellipse1329"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4c578900-d574-4b66-b533-2538ceec9d31/3a24e950-75d9-422e-aff4-d808b07f0a8f?org_if_sml=13636&amp;force_format=original"
              className="cart-ellipse1"
            />
            <img
              alt="Ellipse2330"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4c578900-d574-4b66-b533-2538ceec9d31/38114660-d05a-4395-987e-caedd3e0ad25?org_if_sml=14048&amp;force_format=original"
              className="cart-ellipse2"
            />
          </div>
          <span className="cart-stating-label">
            <span>You’re paying,</span>
          </span>
          <span className="cart-room">
            <span>Custom Gucci Shoes</span>
          </span>
          <span className="cart-room-price">
            <span>$ 400.00</span>
          </span>
          <span className="cart-total-price2">
            <span>
              $
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="cart-text09">450.00</span>
          </span>
          <span className="cart-tax-amount">
            <span>$ 0.00</span>
          </span>
          <span className="cart-total-price1">
            <span>$ 450.00</span>
          </span>
          <span className="cart-totallabel">
            <span>Total</span>
          </span>
          <span className="cart-tax-label">
            <span>Tax</span>
          </span>
          <div className="cart-expiry">
            <input
              type="text"
              placeholder="placeholder"
              className="cart-exp-date input"
            />
          </div>
          <div className="cart-checkout-button">
            <Link to="/reciept" className="cart-pay-button button">
              Pay
            </Link>
          </div>
          <div className="cart-card-number">
            <input
              type="text"
              placeholder="placeholder"
              className="cart-card-number1 input"
            />
          </div>
          <div className="cart-card-holders-name">
            <input
              type="text"
              placeholder="placeholder"
              className="cart-card-name input"
            />
          </div>
          <div className="cart-cvc">
            <input
              type="text"
              placeholder="placeholder"
              className="cart-cvc1 input"
            />
          </div>
          <div className="cart-clear-cart-button">
            <button type="button" className="cart-clear-button button">
              <span className="cart-text14">
                <span>Clear</span>
                <br></br>
              </span>
            </button>
          </div>
          <img
            alt="Vector1550"
            src="/external/vector1550-yoz7.svg"
            className="cart-vector1"
          />
          <div className="cart-cvc2">
            <input
              type="text"
              placeholder="placeholder"
              className="cart-cvc3 input"
            />
          </div>
          <div className="cart-container1">
            <img
              alt="image"
              src="/external/94601b53-60d5-43cb-a8b6-bd38912f9a45-1200w.jpg"
              className="cart-image"
            />
            <div className="cart-container2"></div>
          </div>
          <div className="cart-receipt-page-link">
            <Link to="/reciept" className="cart-link-to-receipt-page">
              <span>Reservation</span>
              <br></br>
            </Link>
          </div>
          <div className="cart-group1">
            <span>
              <span>Do you have a reservation already?</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <footer className="footerContainer cart-footer">
        <div className="cart-container3">
          <span className="logo">MOTELLY</span>
          <nav className="cart-nav1"></nav>
        </div>
        <div className="cart-separator"></div>
        <div className="cart-container4">
          <span className="bodySmall cart-text21">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div className="cart-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="cart-icon10 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="cart-icon12 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="cart-icon14 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Cart
