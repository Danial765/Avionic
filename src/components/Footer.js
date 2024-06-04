import React from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-light text-dark pt-70">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
            
            
          </div>
          
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h2 className="nav__title">Useful links</h2>

                <ul className="list-unstyled">
                  <li>
                  <Link className="nav-link" to="/" aria-current="page">Home</Link>
                  </li>

                  <li>
                  <Link className="nav-link" to="/about">About</Link>
                  </li>
                      
                  <li>
                  <Link className="nav-link" to="/planes">Planes</Link>
                  </li>
                 
                </ul>
              </div>
              
              <div className="col-md-4">
                <h2 className="nav__title">Technology</h2>
                
                <ul className="list-unstyled">
                  
                  
                <li>
                  <Link className="nav-link" to="/faq">FAQs</Link>
                  </li>
                  
                  <li>
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                  </li>
                  
                 
                </ul>
              </div>
              
              <div className="col-md-4">
              <h2 className="footer-head">Contact</h2>
            
            <address>
              talk to is my clivking the button below<br />
              
              <a className="footer__btn btn btn-primary mt-2" href="mailto:example@gmail.com">Email Us</a>
            </address>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>&copy; {currentYear} Avionic. All rights reserved.</p>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
