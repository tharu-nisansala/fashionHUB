import React from 'react';
import kid from '../assets/kid.png';
import kid1 from '../assets/kid1.jpg';
import kid2 from '../assets/kid2.jpg';
import icon from '../assets/icon.png';
import kid3 from '../assets/kid3.webp';
import kid4 from '../assets/kid4.webp';
import kid5 from '../assets/kid5.jpg';
function Kids() {
  return (
    <div className='mt-24 relative bg-slate-200'>
      <div className='flex justify-between items-center'>
        <p className="text-center w-1/2 text-4xl" style={{ fontFamily: 'Bell MT' }}>
          <span className='text-center text-7xl' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>Welcome</span><br />
          To Kids Dress Area
          <img src={icon} alt="icon" className='w-24 h-24 text-center ml-64' />
        </p>
        <div className='relative w-2/3'>
          <img src={kid} alt="kids" className='object-cover w-full h-700px opacity-70' style={{ height: '700px' }} />
          <div className="absolute inset-0 flex flex-col text-center justify-center items-center space-y-3">
            <p style={{ fontFamily: 'Bell MT', fontSize: '90px', fontWeight: 'bolder', textShadow: '4px 4px 8px rgba(255, 255, 255, 0.7)' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-white'>
              50%<span className="text-white text-2xl"> OFF</span>
            </p>
            <p style={{ fontFamily: 'Bell MT', color: 'white', fontSize: '40px', textShadow: '4px 4px 8px rgba(255, 255, 255, 0.7)' }} className='text-shadow-lg'>
              ON SELECTED ITEMS
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center bg-white' style={{ height: '500px' }}>
        <img src={kid1} alt="kid1" className='w-96 rounded-md animate-slideInLeft'/>
        <div className='text-center' style={{ textShadow: '4px 4px 8px rgba(255, 255, 255, 0.7)' }}>
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg'>See Now</p>
          <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight: 'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>
            The latest <span className="text-amber-500" style={{ textShadow: '4px 4px 8px rgba(245, 158, 11, 1)' }}>Casual Dresses</span> for your kids want now
          </p>
          <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
        </div>
        <img src={kid2} alt="kid2" className='w-96 h-96 rounded-md animate-slideInLeft' />
      </div>
      <div className='relative overflow-hidden'>
        <img src={kid3} alt="kid3" className='w-full object-cover opacity-75' style={{ height: '700px' }} />
        <div className="absolute inset-0 flex flex-col items-center  space-y-3 "> 
        <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',marginRight:'1000px' }} className='text-shadow-lg mt-72'>See Now</p>
          <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight: 'bolder' ,marginRight:'900px'}} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>
            The latest <span className="text-amber-500" style={{ textShadow: '4px 4px 8px rgba(245, 158, 11, 1)' }}>Party Dresses<br/></span> for your kids want now
          </p>
          <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl absolute bottom-28 left-44">Shop Now </button>
          </div>
      </div>
      <div className='flex justify-between items-center bg-white' style={{ height: '500px' }}>
        <img src={kid5} alt="kid5" className='w-96 rounded-md h-96' />
        <div className='text-center' style={{ textShadow: '4px 4px 8px rgba(255, 255, 255, 0.7)' }}>
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg'>See Now</p>
          <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight: 'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>
            The latest <span className="text-amber-500" style={{ textShadow: '4px 4px 8px rgba(245, 158, 11, 1)' }}>School Uniforms & Sporty Dresses</span> for your kids want now
          </p>
          <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
        </div>
        <img src={kid4} alt="kid2" className='w-96 h-96 rounded-md' />
      </div>
    </div>
  );
}

export default Kids;
