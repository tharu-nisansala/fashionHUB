import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.webp';
import bg4 from '../assets/bg4.webp';
import sk1 from '../assets/sk1.jpg';
import sk2 from '../assets/sk2.webp';
import sk3 from '../assets/sk3.webp';
import sk4 from '../assets/sk4.webp';
import st1 from '../assets/st1.jpg';
import st2 from '../assets/st2.jpg';
import st3 from '../assets/st3.jpg';
import st4 from '../assets/st4.webp';

function Jeans({ onAddToCart }) {
  const navigate = useNavigate();

  const handleNavigateToSignup = () => {
    console.log("Navigating to payment");
    navigate('/Payment');
  };

  // Array of products
  const products = [
    { id: 1, name: "Poppin' Off Stretch Baggy Jeans", price: 29.99, image: bg1 },
    { id: 2, name: "Scrolling Stretch Baggy Jeans", price: 36.99, image: bg2 },
    { id: 3, name: "Waistband Crossover Jeans", price: 25.99, image: bg3 },
    { id: 4, name: "High Stretch Straight Leg Jeans", price: 40.99, image: bg4 },
    { id: 5, name: "High Stretch Straight Leg Jeans", price: 19.99, image: sk1 },
    { id: 6, name: "High Stretch Straight Leg Jeans", price: 22.99, image: sk2 },
    { id: 7, name: "High Stretch Straight Leg Jeans", price: 20.99, image: sk3 },
    { id: 8, name: "High Stretch Straight Leg Jeans", price: 24.99, image: sk4 },
    { id: 9, name: "High Stretch Straight Leg Jeans", price: 15.99, image: st1 },
    { id: 10, name: "High Stretch Straight Leg Jeans", price: 18.99, image: st2 },
    { id: 11, name: "High Stretch Straight Leg Jeans", price: 17.99, image: st3 },
    { id: 12, name: "High Stretch Straight Leg Jeans", price: 19.99, image: st4 },
  ];

  return (
    <div className="mt-32">
      <div className="container mx-auto p-4">
        
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <div className="relative" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute top-0 left-0">
                <p className="text-left bg-red-700 text-white w-20 pl-2 rounded-br-lg">
                  50% OFF
                </p>
              </div>
              <p className="mt-2">
                {product.name} <br />
                <span className="text-red-700">${product.price.toFixed(2)}</span>
              </p>
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-300 text-white font-semibold rounded-lg font-mono text-l drop-shadow-2xl mr-3"
                  onClick={() => onAddToCart(product)}
                >
                  Add Cart
                </button>
                <button
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-300 text-white font-semibold rounded-lg font-mono text-l drop-shadow-2xl ml-3"
                  onClick={handleNavigateToSignup}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jeans;
