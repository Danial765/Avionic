import React from 'react';
import PropTypes from 'prop-types';
import arrowBtn from '../Assets/Arrow.png';
import playIcon from '../Assets/play.png';
import pauseIcon from '../Assets/pause.png';

function Hero({ heroData, heroCount, setHeroCount, setPlayStatus, playStatus }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrowBtn} alt="Explore Arrow" />
      </div>
      <ul className="hero-dots">
        {[0, 1, 2].map((index) => (
          <li
            key={index}
            onClick={() => setHeroCount(index)}
            className={heroCount === index ? 'hero-dot orange' : 'hero-dot'}
          />
        ))}
      </ul>
      <div className="hero-play">
        <img 
          onClick={() => setPlayStatus(!playStatus)} 
          src={playStatus ? pauseIcon : playIcon} 
          alt="Play/Pause" 
        />
        <p 
          onClick={() => setPlayStatus(!playStatus)}
        >
          See the video
        </p>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroData: PropTypes.shape({
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
  }).isRequired,
  heroCount: PropTypes.number.isRequired,
  setHeroCount: PropTypes.func.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  playStatus: PropTypes.bool.isRequired,
};

export default Hero;
