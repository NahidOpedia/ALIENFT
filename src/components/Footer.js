import React from 'react'

 const Footer = () => {
  return (
      <div className='footer-bg '>
          <div className='footer-container'>
              <h1 className='footer-title'>Don't miss out, Stay updated</h1>
              <div className="input-box d-flex justify-content-between">
                  <input type="email" name="" id="" placeholder='Enter your email address' className='email-input' />
                  <input type="button" value="Subscribe" className='submit-btn' />
              </div>
              <p className='footer-text'>Don't hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>

              <div className="footer-social-icon d-flex justify-content-center">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f social-icon"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter social-icon"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram social-icon"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in social-icon"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube social-icon"></i>
                  </a>
              </div>
           
          </div>
      </div>
  )
}
export default Footer;
