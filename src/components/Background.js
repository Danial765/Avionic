import React from 'react';
import PropTypes from 'prop-types';
import video1 from '../Assets/video1.mp4';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image4.jpg'; // Fixed the image name

function Background({ playStatus, heroCount }) {
  return (
    <>
      {playStatus ? (
        <video className="background fade-in" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      ) : (
        <img
          src={heroCount === 0 ? image1 : heroCount === 1 ? image2 : image3}
          className="background fade-in"
          alt="Background"
        />
      )}
    </>
  );
}

Background.propTypes = {
  playStatus: PropTypes.bool.isRequired,
  heroCount: PropTypes.number.isRequired,
};

export default Background;
