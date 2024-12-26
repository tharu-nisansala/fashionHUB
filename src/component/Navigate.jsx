import React, { useState, useEffect } from "react";
import img1 from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faHeart,faShoppingBag,faSearch,faGauge,faInfoCircle,faBell} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from '../firebase/firebase'; 
import { signOut } from 'firebase/auth';

function Navigate({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); 
      navigate("/signin"); 
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const isActive = (path) => 
    location.pathname === path ? "text-amber-500" : "";

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const cartCount = cart.length;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 border-b shadow-2xl z-50 ">
      <div className="container mx-auto p-2 flex justify-between items-center mr-14">
        <div className="flex justify-between items-center">
          <img src={img1} alt="navlogo" className="w-25 h-20" />
          <p className="text-black font-black">
            fashion<span className="bg-amber-500 text-white rounded-md px-1">HUB</span>
          </p>
        </div>
        <div className="hidden md:flex space-x-14 font-semibold " style={{fontSize:'17px'}}>
          <button
            className={`hover:underline ${isActive("/")}`}
            onClick={() => handleNavigation("/")}
          >
            Women
          </button>
          <button
            className={`hover:underline ${isActive("/Men")}`}
            onClick={() => handleNavigation("/Men")}
          >
            Men
          </button>
          <button
            className={`hover:underline ${isActive("/Kids")}`}
            onClick={() => handleNavigation("/Kids")}
          >
            Kids
          </button>
          <button
            className={`hover:underline ${isActive("/Beauty")}`}
            onClick={() => handleNavigation("/Beauty")}
          >
            Beauty
          </button>
        </div>

        <div className="flex justify-between items-center pr-2 ">
          <div className="flex items-center border rounded-full px-4 py-2 w-80 border-current pr-2 mr-3 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm bg-white-200 pr-2 mr-3 bg-gray-100"
            />
            <button className="ml-2 pr-2 pl-2">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="flex items-center space-x-6 text-lg">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter} // Show dropdown on mouse enter
              onMouseLeave={handleMouseLeave} // Hide dropdown on mouse leave
            >
              <button className="p-2 focus:outline-none justify-center">
                {user ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="rounded-full w-8 h-8"
                  />
                ) : (
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                )}
              </button>
              {isOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 text-center"
                  style={{ maxHeight: "300px", overflowY: "auto" }} 
                >
                  <div className="flex justify-between p-4 border-b">
                    {!user ? (
                      <>
                        <button
                          className="px-4 py-2 border rounded-full text-black hover:bg-gray-100"
                          onClick={handleSignInClick}
                        >
                          Sign In
                        </button>
                        <button
                          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                          onClick={handleSignUpClick}
                        >
                          Sign Up
                        </button>
                      </>
                    ) : (
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                  {user && (
                    <ul className="p-4 space-y-4 text-sm">
                      <li className="flex items-center space-x-3 hover:text-gray-700">
                        <FontAwesomeIcon icon={faGauge} />
                        <span>Dashboard</span>
                      </li>
                      <li
                        className="flex items-center space-x-3 hover:text-gray-700"
                        onClick={() => handleNavigation("/UserProfile")}
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <span>My Info</span>
                      </li>
                      <li className="flex items-center space-x-3 hover:text-gray-700">
                        <FontAwesomeIcon icon={faBell} />
                        <span>Notifications</span>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </div>
            <FontAwesomeIcon icon={faHeart} className="hover:text-amber-700  text-red-700" />
            <li className="flex items-center  hover:text-gray-700 relative "
                onClick={() => handleNavigation("/Cart")}
                      >
           <FontAwesomeIcon icon={faShoppingBag} className="hover:text-gray-500 text-slate-950 text-2xl" />
            {cartCount > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold rounded-full  mr-5 mb-2 px-1">
                {cartCount}
                
                </span> )}
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigate;
