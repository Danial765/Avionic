import React from 'react';
import PropTypes from 'prop-types';

function Banner({ title, background }) {
  return (
    <div>
      <div 
        className="banner-pages d-flex align-items-center justify-content-center"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="col-12 text-center">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Banner;
