import React from 'react'
import Navbar from './Navbar'; 
import Banner from './Banner'; 
import Footer from './Footer';
import Airbus from '../Assets/Airbus.jpg'; 

function Contact() {
  return (
    <div>
      <Navbar />
      <Banner title="Contact Us" background={Airbus} />
      <section id="contact" className='bg-dark
'>
       <div class="container ">
          <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">call us</h4>
                    <p>+8801683615582,+8801750603409</p>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">office loaction</h4>
                   <address>Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">office loaction</h4>
                    <address>Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p>http://al.a.noman1416@gmail.com</p>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </section>
      <Footer />
    </div>
  )
}

export default Contact
