import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { faFacebook, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="bg-black text-amber-500 py-8 h-96">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className='text-center'>
          <h2 className="font-bold text-lg mb-4 ">About Us</h2>
          <p className="text-sm ml-6 text-center">
            We are a leading fashion brand dedicated to providing the latest trends and styles. Explore our collection of stylish and comfortable apparel.
          </p>
        </div>

        
        <div className='text-center'>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        
        <div className='text-center'>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p className="text-sm">123 Fashion Street, New York, NY 10001</p>
          <p className="text-sm">Email: contact@fashionHUB.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        
        <div className='text-center mr-10'>
          <h2 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h2>
          <form className="text-sm">
            <input type="email" placeholder="Your email" className="w-full p-2 mb-4 text-black rounded" />
            <button type="submit" className="w-full bg-amber-500 p-2 rounded hover:bg-amber-600 text-black">Subscribe</button>
          </form>
           <div className="flex justify-center space-x-4 mt-5"> 
                        <button className="text-blue-600 hover:text-blue-700"> 
                          <FontAwesomeIcon icon={faFacebook} size="lg" /> </button> 
                          <button className="text-red-500 hover:text-red-600"> 
                          <FontAwesomeIcon icon={faGoogle} size="lg" /> </button> 
                          <button className="text-blue-400 hover:text-blue-500"> 
                          <FontAwesomeIcon icon={faTwitter} size="lg" /> </button> 
                          <button className="text-rose-600 hover:text-rose-700"> 
                          <FontAwesomeIcon icon={faInstagram} size="lg" /> </button> 
                          </div> 
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} FashionHUB. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
