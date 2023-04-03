import React from 'react'

function Footer() {
  return (
    <footer className="footer__area-3">
    <div className="footer__top-3" id="contact">
      <div className="footer__top-wrapper-3">
        <div className="footer__logo-3 pt-120">
        {

            // <img src="assets/imgs/logo/site-logo-white-2.png" alt="Footer Logo"/>
        }
        <h2>logo</h2>
          <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid
            them.</p>
        </div>
        <div className="footer__social-3">
          <ul>
            <li><a href="#">facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer__contact-3">
          <a className="end " href="#" data-aos="flip-right">Let’s talk</a>
        </div>
      </div>
    </div>

    <div className="footer__btm-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="footer__copyright-3">
              <p>© 2022 - 2025 | Alrights reserved by <a href="#" target="_blank">Company</a>
              </p>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="footer__nav-2">
              <ul className="footer-menu-2 menu-anim">
                <li><a href="#about">about us</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="#blog">Blogs</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer