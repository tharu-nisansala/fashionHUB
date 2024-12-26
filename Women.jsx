import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img3 from '../assets/sw1.png';
import img4 from '../assets/sw2.png';
import img5 from '../assets/s2.jpeg';
import img6 from '../assets/frock.png';
import img7 from '../assets/jeans.jpeg';
import img8 from '../assets/tops.png';
import img9 from '../assets/skirt.jpg';

function Women() {
  const images = [img3, img4, img5]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  
  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className='mt-14'>
      {/* First Section - Switching Photos */}
      <div className="relative overflow-hidden h-5/6">
        <img
          src={images[currentImageIndex]}
          alt="Switching"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="relative overflow-hidden h-1/3 mt-4">
        <img
          src={img7}
          alt="Static Display"
          className="w-full h-full object-cover opacity-75 "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3"> 
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '40px' }} className='text-shadow-lg'>See Now </p> 
          <p style={{ fontFamily: 'Bell MT', fontSize: '25px', fontWeight:'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>The latest <span className="text-amber-500 " style={{fontSize:'30px'}}>Jeans</span> styles you want now</p>
          <button 
            className="px-6 py-2 bg-white hover:bg-slate-300 text-black font-semibold rounded-md font-mono text-2xl drop-shadow-2xl" 
            onClick={() => handleButtonClick('/Jeans')} // Update the onClick handler
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden h-1/3 mt-4">
        <img
          src={img8}
          alt="Static Display"
          className="w-full h-full object-cover opacity-75 scale-75 animate-slideInLeft"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0"> 
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '40px' }} className='text-shadow-lg'>See Now </p> 
          <p style={{ fontFamily: 'Bell MT', fontSize: '25px', fontWeight:'bolder' }} className='pb-14 drop-shadow-2xl text-stroke text-shadow-lg text-black text-center'>The <span className="text-amber-500 " style={{fontSize:'30px'}}>latest Tops and Sweater </span>styles you want now</p>
          <button 
            className="px-6 py-2 bg-white hover:bg-slate-300 text-black font-semibold rounded-md font-mono text-2xl"
            onClick={() => handleButtonClick('/Tops')}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden h-1/3 mt-4">
        <img
          src={img9}
          alt="Static Display"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3"> 
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '25px' }} className='text-shadow-lg'>See Now </p> 
          <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight:'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>The latest <span className="text-amber-600" style={{fontSize:'30px'}}>Skirt</span> styles you want now</p>
          <button 
            className="px-6 py-2 bg-white hover:bg-slate-300 text-black font-semibold rounded-md font-mono text-2xl drop-shadow-2xl"
            onClick={() => handleButtonClick('/Skirts')}
          >
            Shop Now
          </button>
        </div>
      </div>
      {/* Second Section - Static Photo */}
      <div className="relative overflow-hidden h-1/3 mt-4 mb-6">
        <img
          src={img6}
          alt="Static Display"
          className="w-full h-full object-cover opacity-75 animate-fadeIn" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3"> 
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px' }} className='text-shadow-lg'>See Now </p> 
          <p style={{ fontFamily: 'Bell MT', fontSize: '25px', fontWeight:'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>The latest <span className="text-amber-500" style={{fontSize:'30px'}}>frock </span>styles you want now</p>
          <button 
            className="px-6 py-2 bg-white hover:bg-slate-300 text-black font-semibold rounded-md font-mono text-2xl"
            onClick={() => handleButtonClick('/Frocks')}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Women;
