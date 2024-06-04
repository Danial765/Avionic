import React from 'react';
import image3 from '../Assets/image3.webp';
import Navbar from './Navbar'; 
import Banner from './Banner'; 
import Footer from './Footer'; 
import Airbus from '../Assets/Airbus.jpg'; 
import Section2 from './Section2';

function About() {
  return (
    <>
    <Navbar />
    <Banner title="About" background={Airbus} />
    
    <Section2
        background={image3}
        title="Welcome to Avionic: Where Luxury Meets the Skies"
        description={`At Avionic, we redefine the very essence of luxury travel by offering an exclusive experience tailored to those who demand nothing but the best. Elevate your journey to new heights with our bespoke fleet of private jets, meticulously crafted to exceed even the most discerning expectations.

Unparalleled Luxury

Step into the world of Avionic and indulge in the epitome of luxury aviation. Our fleet showcases the pinnacle of design and engineering, boasting sleek exteriors and opulent interiors that redefine elegance in the skies. Each aircraft is meticulously curated to provide the utmost comfort and sophistication, ensuring a truly unforgettable journey for every passenger.`}
      />
    <Footer />
    </>
  );
}

export default About;
