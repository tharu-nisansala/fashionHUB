import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'Users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            setProfileImage(user.photoURL || userDoc.data().profileImage);
          } else {
            setError('No such document!');
          }
        } else {
          setError('No user is currently authenticated!');
        }
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `profileImages/${auth.currentUser.uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    setProfileImage(downloadURL);

    const userDocRef = doc(db, 'Users', auth.currentUser.uid);
    await updateDoc(userDocRef, {
      profileImage: downloadURL
    });
  };

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-20 bg-gray-100 mb-16 flex flex-col justify-center">
      <div className="relative mt-20 ml-32">
        <div
          className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-400 shadow-lg transform sm:-rotate-6 sm:rounded-3xl"
          style={{ width: '1200px', height: '500px' }}
        ></div>
        <div
          className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10 flex"
          style={{ width: '1200px', height: '500px' }}
        >
          {/* Profile Image Section */}
          <div className="flex flex-col items-center w-1/3 mt-10">
            <div className="relative">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-40 h-40 rounded-full"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <input
                type="file"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-amber-500" style={{ fontFamily: 'Bell MT' }}>
              {userData.firstName} {userData.lastName}
            </h3>
          </div>

          {/* User Details Section */}
          <div className="w-2/3 pl-10">
            <h2 className="text-2xl font-semibold text-center text-amber-500 mb-6" style={{ fontFamily: 'Bell MT' }}>
              User Profile
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  value={userData.firstName}
                  readOnly
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={userData.lastName}
                  readOnly
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={userData.address}
                  readOnly
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={userData.email}
                  readOnly
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
            </div>
            <button className="bg-amber-500 text-white py-2 px-3 rounded-lg mt-10">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
