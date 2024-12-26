import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentReceipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentDetails = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Payment Receipt</h2>

        <p className="text-gray-700 mb-2">
          <strong>Transaction ID:</strong> {paymentDetails.transactionId}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Total Paid:</strong> ${paymentDetails.totalPrice.toFixed(2)}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Payment Method:</strong> {paymentDetails.paymentMethod}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Details</h3>
        <ul className="list-disc ml-5">
          {paymentDetails.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
