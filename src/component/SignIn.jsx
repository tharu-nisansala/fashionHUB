import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../firebase/firebase'; // Ensure the correct path to your firebase.js file
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import image from '../assets/or.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log('User signed in:', userCredential.user);
      // Redirect to Women page after successful sign-in
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign-In successful:', result.user);
      // Redirect to Women page after successful Google sign-in
      navigate('/');
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50 mt-16">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row text-center" style={{ width: '800px', height: '440px' }}>
        {/* Image Section */}
        <div className="hidden lg:block">
          <img src={image} alt="Fashion" className="h-full object-cover" style={{ width: '600px' }} />
        </div>
        {/* Form Section */}
        <div className="p-8 w-full bg-white z-10 text-center items-center">
          <h2 className="text-3xl font-bold text-amber-500 text-center mb-6 ml-14">Sign In now</h2>
          <form className="space-y-6 text-center w-60 m-10" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-80 py-2 text-white bg-amber-500 hover:bg-amber-600 rounded-md font-semibold">
              SIGN IN
            </button>
          </form>
          <div className="text-center ml-4 mb">
            <p>Don't have an account? <a href='/SignUp' className='text-amber-500 underline'>Sign Up</a></p>
            <p className="text-gray-500">or sign in with:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="text-blue-600 hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </button>
              <button className="text-red-500 hover:text-red-600" onClick={handleGoogleSignIn}>
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button className="text-blue-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
              <button className="text-gray-600 hover:text-gray-700">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
