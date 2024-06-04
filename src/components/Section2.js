import React from 'react';



function Section2({ title, description, background }) {
  return (
    <div className="container-fluid">
      <div className="row align-items-center"> {/* Align items vertically in the middle */}
     
        <div className="col-lg-6 col-md-12 custom-spacing"> {/* Responsive padding */}
          <h2>{title}</h2>
          <p>{description}</p>
          
        </div>
        
        <div 
          className="col-lg-6 col-md-12 " // No padding for the image container
          style={{ 
            backgroundImage: `url(${background})`, // Correctly reference the background image
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px' // Adjust the height for smaller screens
          }}
        >
          
        </div>
      </div>
    </div>
  );
}

export default Section2;
