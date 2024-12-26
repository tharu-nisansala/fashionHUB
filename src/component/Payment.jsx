import React, { useState } from "react";
import img1 from "../assets/mst.png";
import img2 from "../assets/image.png";
import { useNavigate } from 'react-router-dom';
function Payment({ cart }) {  
  const navigate = useNavigate(); 
  const [selectedMethod, setSelectedMethod] = useState("creditCard");
  const [showAlert, setShowAlert] = useState(false);

 
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const discountedPrice = totalPrice * 0.6;

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    const transactionId = "TX123456"; 
    const paymentDetails = {
      transactionId,
      items: cart,
      totalPrice: discountedPrice,
      paymentMethod: selectedMethod,
    };


    navigate("/PaymentReceipt", { state: paymentDetails });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-200 mt-12">
      <div className="w-full max-w-md bg-amber-400 bg-opacity-40 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-amber-900">Payment Method</h2>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h3>
          <ul className="space-y-2">
            {cart.map((item) => (  // Use cart prop to map through items
              <li key={item.id} className="flex justify-between">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-800 font-medium">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-300 mt-4 pt-2">
            <p className="flex justify-between text-gray-800">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-800">
              <span>Discount (40%):</span>
              <span>-${(totalPrice * 0.4).toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-900 font-bold">
              <span>Total:</span>
              <span>${discountedPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <form onSubmit={handlePaymentSubmit}> 
          {/* Payment Method Selection */} 
          <div className="mb-6"> 
            <label className="block text-gray-700 font-medium mb-2"> Select Payment Method </label> 
            <div className="space-y-3 flex"> 
              <input type="radio" name="Mastercard" id="mastercard" className="form-radio h-4 w-4 text-red-600 mt-6 ml-6" />
              <img src={img1} alt="master" className="h-12 w-14"/> 
              <input type="radio" name="Mastercard" id="mastercard2" className="ml-20 form-radio w-4 " />
              <img src={img2} alt="master" className="h-12 w-14"/> 
              </div> 
              </div> 
              {/* Credit Card Details */} 
              {selectedMethod === "creditCard" && ( 
                <div className="mb-6"> 
                <label className="block text-gray-700 font-medium mb-2"> Card Details </label> 
                <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" required /> 
                <div className="flex mt-2 space-x-2"> <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" required /> 
                <input type="text" placeholder="CVC" className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" required /> 
                </div> 
                </div> 
              )} 
              {/* Submit Button */} 
              <button type="submit" className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2" > Confirm Payment 
                </button> 
              </form>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" role="dialog">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-green-700">Payment Successful</h2>
            <p className="text-gray-700 mt-2">Thank you for your payment. Your transaction is complete!</p>
            <button
              onClick={() => setShowAlert(false)}
              className="mt-4 bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
