import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import './reciept.css'

const Reciept = (props) => {
  const [receipt, setReceipt] = useState({})
  const [cookies, setCookies, removeCookies] = useCookies(['cart'])
  const ref_number = new URLSearchParams(document.location.search).get('ref_number')
  useEffect(() => {
    if (ref_number) {
      fetch('http://127.0.0.1:5001/receipt?ref_number=' + ref_number, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setReceipt(data)
            console.log(data)
          })
        }
      })

    }
  }, [ref_number])
  return (
    <div className="reciept-container">
      <Helmet>
        <title>Reciept - Thick Fancy Echidna</title>
        <meta property="og:title" content="Reciept - Thick Fancy Echidna" />
      </Helmet>
      <div className="reciept-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer reciept-navbar-interactive"
        >
          <span className="logo">MOTELLY</span>
          <div data-thq="thq-navbar-nav" className="reciept-desktop-menu">
            <nav className="reciept-links">
              <Link to="/" className="reciept-home-link bodySmall">
                Home
              </Link>
              <Link to="/rooms" className="reciept-rooms-link bodySmall">
                Rooms
              </Link>
              <Link to="/cart" className="reciept-cart-link bodySmall">
                Cart
                {cookies.cart&& <div style={{width:10,height:10,borderRadius:5,marginLeft:10,background:"red"}}></div>}
              </Link>
            </nav>
            <div className="reciept-buttons">
              <Link to="/sign-up-page1" className="reciept-login buttonFlat">
                Login
              </Link>
              <Link to="/sign-up" className="reciept-register buttonFilled">
                Register
              </Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="reciept-burger-menu">
            <svg viewBox="0 0 1024 1024" className="reciept-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="reciept-mobile-menu1 mobileMenu"
          >
            <div className="reciept-nav">
              <div className="reciept-top">
                <span className="logo">MOTELLY</span>
                <div data-thq="thq-close-menu" className="reciept-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="reciept-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="reciept-links1">
                <span className="reciept-nav12 bodySmall">Home</span>
                <span className="reciept-nav22 bodySmall">Rooms</span>
                <span className="reciept-nav32 bodySmall">Login</span>
                <span className="reciept-nav42 bodySmall">Sign Up</span>
                <span className="reciept-nav52 bodySmall">Cart</span>
              </nav>
              <div className="reciept-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="reciept-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="reciept-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="reciept-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="reciept-hero">
        <div className="heroContainer reciept-hero1">
          <div className="reciept-container1">
            <span className="reciept-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Find the Perfect Room for Your Trip</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <h1 className="reciept-hero-heading heading1">
              Thank You For Choosing To Book With Us!
            </h1>
            <div className="reciept-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="reciept-container2">
        <div className="reciept-receipt">

        </div>
        <div className="reciept-receipt-card">
          <div className="reciept-header-text">
            <span className="reciept-text14">
              <span>Payment Success!</span>
            </span>
            <span className="reciept-text16">
              <span>Your payment has been successfully done.</span>
            </span>
          </div>
          <img
            alt="Line2108"
            src="/external/line2108-qsgp.svg"
            className="reciept-line"
          />
          <div className="reciept-amount">
            <span className="reciept-text18">
              <span>Total Payment</span>
            </span>
            <span className="reciept-amount-paid">${receipt.room_price}</span>
          </div>
          <div className="reciept-payment-details">
            <div className="reciept-row1">
              <div className="reciept-payment-detail">
                <span className="reciept-text20">
                  <span>Ref Number</span>
                </span>
                <span className="reciept-identification">
                  <span>{receipt.ref_number}</span>
                </span>
              </div>
            </div>
            <div className="reciept-row2">
              <div className="reciept-payment-detail1">
                <span className="reciept-text23">Payment Method</span>
                <span className="reciept-text24">Card</span>
              </div>
              <div className="reciept-payment-detail2">
                <span className="reciept-text25">
                  <span>Email:</span>
                </span>
                <span className="reciept-user-name">
                  <span>{receipt.user_email}</span>
                </span>
              </div>
              <div className="reciept-payment-detail2">
                <span className="reciept-text25">
                  <span>Status</span>
                </span>
                <span className="reciept-user-name">
                  <span>{receipt.status}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="reciept-success-icon">
            <img
              alt="IconBackground2110"
              src="/external/iconbackground2110-lbfr-200h.png"
              className="reciept-icon-background"
            />
            <div className="reciept-vuesaxboldtickcircle">
              <div className="reciept-vuesaxboldtickcircle1">
                <div className="reciept-tickcircle">
                  <img
                    alt="VectorI211"
                    src="/external/vectori211-8gge.svg"
                    className="reciept-vector"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="reciept-pdf-button">
            <div className="reciept-vuesaxlinearimport">
              <div className="reciept-vuesaxlinearimport1">
                <div className="reciept-import">
                  <img
                    alt="VectorI211"
                    src="/external/vectori211-vfd.svg"
                    className="reciept-vector1"
                  />
                  <img
                    alt="VectorI211"
                    src="/external/vectori211-u05t.svg"
                    className="reciept-vector2"
                  />
                  <img
                    alt="VectorI211"
                    src="/external/vectori211-ybpg.svg"
                    className="reciept-vector3"
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="reciept-banner">
        <div className="bannerContainer reciept-banner1">
          <span className="reciept-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Book your perfect stay with us! Whether you&apos;re traveling
                  for business or leisure, we have a variety of room plans to
                  suit your needs. Enjoy comfortable and affordable
                  accommodations with secure payment options. Start planning
                  your next trip with us today!
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="reciept-cancel buttonFilled" onClick={() => {
            fetch("http://localhost:5001/cancel", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ref_number: ref_number
              })}).then((res) => {
                if (res.ok) {
                  res.json().then((data) => {
                    alert(data.message)
                  })
                }
              })
          }}>
            <span>
              <span>Cancel Order</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <footer className="footerContainer reciept-footer">
        <div className="reciept-container3">
          <span className="logo">MOTELLY</span>
        </div>
        <div className="reciept-separator"></div>
        <div className="reciept-container4">
          <span className="bodySmall reciept-text45">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div className="reciept-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="reciept-icon10 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="reciept-icon12 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="reciept-icon14 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Reciept
