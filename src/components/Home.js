import React, { useState, useEffect } from 'react';
import '../App.css';
import Background from './Background';
import Navbar from './Navbar'; 
import Hero from './Hero'; 
import Section2 from './Section2';
import image3 from '../Assets/image3.webp';
import image5 from '../Assets/private.jpg';
import image6 from '../Assets/Baraj.jpeg';
import Footer from './Footer';

const heroData = [
  { text1: "Experience the Skies", text2: "Like Never Before" },
  { text1: "Discover Our Premium Fleet", text2: "for Sale or Rent" },
  { text1: "Looking to buy", text2: "the perfect aircraft" }
];

function Home() {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const handleHeroChange = (index) => {
    setHeroCount(index);
    setPlayStatus(!playStatus);
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="hero-section">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero  
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={handleHeroChange}
          playStatus={playStatus}
        />
      </div>
      <Section2
        background={image3}
        title="Welcome to Avionic: Where Luxury Meets the Skies"
        description={`At Avionic, we redefine the very essence of luxury travel by offering an exclusive experience tailored to those who demand nothing but the best. Elevate your journey to new heights with our bespoke fleet of private jets, meticulously crafted to exceed even the most discerning expectations.

Unparalleled Luxury

Step into the world of Avionic and indulge in the epitome of luxury aviation. Our fleet showcases the pinnacle of design and engineering, boasting sleek exteriors and opulent interiors that redefine elegance in the skies. Each aircraft is meticulously curated to provide the utmost comfort and sophistication, ensuring a truly unforgettable journey for every passenger.`}
      />
      <div className="reverse">
        <Section2 background={image5}
          title="Who We Are: Your Trusted Partner in Aviation"
          description={`At Avionic, we are dedicated to providing exceptional aircraft solutions tailored to meet the unique needs of our clients. With years of experience in the aviation industry, we specialize in offering a wide range of aircraft for sale and rent, ensuring unmatched quality, safety, and customer satisfaction.

Our mission is to make the skies accessible to everyone, delivering premium aircraft and top-tier services that set the standard for excellence in aviation. We aim to be your go-to source for reliable, high-quality aircraft, whether you're looking to purchase or rent.`}
        />
      </div>
      <Section2 background={image6} title="Team Introduction" description="Our team of aviation experts brings together a wealth of knowledge and experience. From seasoned pilots to skilled maintenance professionals, each member is dedicated to ensuring your safety, comfort, and satisfaction. Meet the people who make it all possible.Quality: We uphold the highest standards in all our offerings, ensuring every aircraft is meticulously maintained and ready for your journey.
Integrity: Transparency and honesty are at the heart of everything we do. We build lasting relationships based on trust.
Customer Focus: Your needs are our priority. We provide personalized services to ensure a seamless and enjoyable experience.
Innovation: We continually seek to improve and innovate, staying ahead of industry trends to offer the best solutions." />
   
   <Footer/>
   
    </div>


   


  );
}

export default Home;
