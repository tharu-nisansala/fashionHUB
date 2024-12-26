import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import img2 from '../assets/dress.jpg';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log('User created:', user);
      setSuccess('Account created successfully!');

      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
      });

      navigate('/SignIn');

    } catch (error) {
      console.error('Error creating user:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50 mt-20">
      <div className="relative bg-white rounded-l-lg shadow-2xl overflow-hidden justify-center w-2/5">
        <div className="p-8 bg-white z-10 text-center">
          <h2 className="text-3xl font-bold text-amber-500 text-center mb-6">
            Sign up now
          </h2>
          <form className="space-y-8 text-center" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 text-center">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <a href='/signin'><button
              type="submit"
              className="w-full py-2 text-white bg-amber-500 hover:bg-amber-600 rounded-md font-semibold mt-8"
            >
              SIGN UP
            </button></a>
            <p>You have already account <a href='/signin'> <span className='text-amber-500 underline'>Sign In</span></a></p>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={img2}
          alt="Fashion"
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default SignUp;
