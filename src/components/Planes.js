import React from 'react';
import Navbar from './Navbar'; 
import Banner from './Banner'; 
import Footer from './Footer'; 
import Airbus from '../Assets/Airbus.jpg'; 
import Section2 from '../components/Section2'
import pro1 from '../Assets/pro-1.jpg'
import pro2 from '../Assets/pro-2.jpg'
import pro3 from '../Assets/beechjet9.webp'

function Planes() {
  return (
    <>
      <Navbar />
      <Banner title="Planes" background={Airbus} />
      <Section2 title="Cessna Citation Longitude" background={pro1} description="The Cessna Citation Longitude is a business jet produced by Cessna, part of the Cessna Citation family. It remains the largest business jet by Cessna. Announced at the May 2012 EBACE, the Model 700 made its first flight on October 8, 2016, with certification obtained in September 2019. The aluminum airframe has the fuselage cross-section of the Citation Latitude, stretched by a seat row. Powered by Honeywell HTF7000 turbofans, it has a new ~28° swept wing and a T-tail for a 3,500 nmi (6,500 km) range.

"/>


<div className="reverse">
  <Section2 title="Embraer Phenom 300" background={pro2}  description="The Embraer EMB-505 Phenom 300 is a light business jet designed and produced by the Brazilian aerospace manufacturer Embraer. Certified for single-pilot operations, it can carry up to 11 occupants.[4] Work on the Phenom 300 started in response to customer demands for a larger business aircraft than the Phenom 100, a very light jet. While the design team originally intended for the aircraft to be a straightforward stretched derivative of the Phenom 100, a clean sheet approach was later adopted. The Phenom 300 featured more powerful engines, the addition of spoiler and winglets, along with an elongated cabin to accommodate more passengers. Several features, from its cabin and interior design to its landing gear and structure, can be traced back to the Phenom 100."/>
</div>
<Section2 title="Hawker 400XP" background={pro3} description="The Hawker 400 (also known as the Beechjet 400) is a light business jet. Initially designed and built by Mitsubishi, it has been further developed and updated by the Beech Aircraft Company, now part of Textron Aviation.

It was produced over 30 years under the names such as Mitsubishi Diamond/Diamond II, Beechjet 400/400A, and Hawker 400XP; military version T-1 Jayhawk was also produced. In total, over 900 Hawker 400s have been delivered.

Since 2017, a factory-engineered and supported upgrade to Hawker 400XPR is provided, reducing fuel consumption by 16-20%, and improving range by as much as 33%."/>



      <Footer />
    </>
  );
}

export default Planes;
