import React , { useState, useEffect } from 'react'
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import f from '../assets/f.jpg';
import c from '../assets/c.jpg';
import p from '../assets/p.webp';
import b from '../assets/b.jpg';
import e from '../assets/e.jpg';
import l from '../assets/l.jpg';
import h from '../assets/h.jpg';
import ss from '../assets/ss.jpg';
import el from '../assets/el.jpg';
function Beauty() {
    const images = [b1, b2, b3]; 
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
        return () => clearInterval(interval);
      }, [images.length]);
  return (
  
        <div className='mt-14'>
      {/* First Section - Switching Photos */}
      <div className="relative overflow-hidden h-5/6">
        <img
          src={images[currentImageIndex]}
          alt="Switching"
          className="w-full object-cover transition-opacity duration-500" style={{height:'600px'}}/>
      </div>
      <div className="container mx-auto p-4">
              <div className="grid grid-cols-3 gap-4">
              
                <div className="relative text-center">
                  <img src={f} alt="formal" className="w-full h-[480px] object-cover opacity-70" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                    <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '4px 4px 8px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Foundation</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={c} alt="print" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Concealer</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={p} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Powder</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative text-center">
                  <img src={b} alt="print" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Blush</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={e} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Eyeshadow</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
              </div>
      </div>
      </div>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-4 gap-4">
                <div className="relative text-center">
                  <img src={ss} alt="print" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Setting Spray</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={el} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Eyeliner & Mascara </p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={l} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Lipstick</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
                <div className="relative text-center">
                  <img src={h} alt="overshirts" className="w-full h-[480px] object-cover opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <p style={{ fontFamily: 'Forte', fontSize: '40px',textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', fontWeight:'bold'}} className='text-shadow-lg text-zinc-950'>Highlighter</p>
                    <button className="px-6 py-2 bg-black hover:bg-slate-900 text-white font-semibold rounded-md font-mono text-2xl drop-shadow-2xl">Shop Now</button>
                  </div>
                </div>
              </div>
      </div>
 </div>

  )
}

export default Beauty