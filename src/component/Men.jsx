import React from 'react';
import menv from '../assets/men.mp4';
import casual from '../assets/casual.jpg';
import formal from '../assets/formal.jpg';
import print from '../assets/Printed.jpg';
import over from '../assets/Overshirts.jpg';
import tshirt from '../assets/T.webp';
import denim from '../assets/Denim.jpg';
function Men() {
  return (
    <div className='mt-20 bg-slate-200'>
      <div className="relative h-96">
        <div className="w-full h-96 aspect-video overflow-hidden shadow-lg border">
          <video
            src={menv} 
            muted
            autoPlay
            loop
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p style={{ fontFamily: 'Forte', color: 'white', fontSize: '50px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className="text-center">
              Welcome to Men Dress Area
            </p>
          </div>
        </div>
      </div>
      
      <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px' }} className='text-shadow-lg text-center pt-3'>See Now </p>
      <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight: 'bolder', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black text-center pb-3.5'>
        The <span className="text-amber-500">Shirts </span>styles you want now
      </p>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="relative text-center">
            <img src={casual} alt="casual" className="w-full h-[480px] object-cover opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
              <p style={{ fontFamily: 'Forte', fontSize: '30px',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg text-white'>Casual Shirt</p>
              <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
            </div>
          </div>
          <div className="relative text-center">
            <img src={formal} alt="formal" className="w-full h-[480px] object-cover opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
              <p style={{ fontFamily: 'Forte', fontSize: '30px',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg text-white'>Formal Shirt</p>
              <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
            </div>
          </div>
          <div className="relative text-center">
            <img src={print} alt="print" className="w-full h-[480px] object-cover opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
              <p style={{ fontFamily: 'Forte', fontSize: '30px',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg text-white'>Printed Shirt</p>
              <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
            </div>
          </div>
          <div className="relative text-center">
            <img src={over} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
              <p style={{ fontFamily: 'Forte', fontSize: '30px',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} className='text-shadow-lg text-white'>Overshirts<br />Shirt</p>
              <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 w-full relative overflow-hidden">
        <img src={tshirt} alt="shirt" className='w-full object-cover opacity-75'style={{height:'500px'}} />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3"> 
          <p style={{ fontFamily: 'Forte', color: 'black', fontSize: '50px' }} className='text-shadow-lg'>See Now </p> 
          <p style={{ fontFamily: 'Bell MT', fontSize: '40px', fontWeight:'bolder' }} className='drop-shadow-2xl text-stroke text-shadow-lg text-black'>The latest <span className="text-amber-500">T Shirt</span> styles you want now</p>
          <button className="px-6 py-2 bg-white hover:bg-slate-300 text-black font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now </button>
          </div>
      </div>
      <div className=" p-4 w-full relative overflow-hidden">
        <img src={denim} alt="denim" className='w-full object-cover 'style={{height:'500px'}} />
        <div className="absolute inset-0 flex flex-col items-center  space-y-3 "> 
          
          <button className="px-6 py-2 bg-black hover:bg-slate-300 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl absolute bottom-20 left-36">Shop Now </button>
          </div>
      </div>
    </div>
  );
}

export default Men;
