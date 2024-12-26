import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigate from './component/Navigate';
import SignUp from './component/SignUp';
import Women from './component/Women';
import Men from './component/Men';
import Kids from './component/Kids';
import Beauty from './component/Beauty';
import Footer from './component/Footer';
import SignIn from './component/SignIn';
import Jeans from './component/Jeans';
import Payment from './component/Payment';
import UserProfile from './component/UserProfile';
import Cart from './component/Cart';
import PaymentReceipt from './component/PaymentReceipt'; // Import new PaymentReceipt component

function App() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="bg-gradient-to-t from-rose-100">
      <Router>
        <Navigate profilePhoto={profilePhoto} cart={cart} />
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn setProfilePhoto={setProfilePhoto} />} />
          <Route path="/" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Jeans" element={<Jeans onAddToCart={handleAddToCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} onRemove={handleRemoveFromCart} />} />
          <Route path="/Payment" element={<Payment cart={cart} />} />
          <Route path="/PaymentReceipt" element={<PaymentReceipt />} /> {/* New route for receipt */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
