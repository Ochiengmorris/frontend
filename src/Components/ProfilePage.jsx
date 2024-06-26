import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';
import axios from 'axios';



const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user?.firstname || '');
  const [lastName, setLastName] = useState(user?.lastname || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone ? `0${user.phone}` : '');
  const [message,setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace this URL with your actual endpoint to get user data
        const response = await axios.get('/user/profile');
        const userData = response.data;
        setFirstName(userData.firstname);
        setLastName(userData.lastname);
        setEmail(userData.email);
        setPhone(`0${userData.phone}`);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setEmail(user.email);
      setPhone(`0${user.phone}`);
    } else {
      fetchUserData();
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
    try {
      const response = await axios.post("/user/update-profile", {
        email,
        firstname: firstName,
        lastname: lastName,
        phone
      })
      if(response){
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='px-4 mb-16 bg-gray-100'>
      <div className='py-4 mb-4 border-y border-black'>
        <h3 className='text-xl font-semibold'>Profile</h3>
      </div>
      <div className='bg-white p-4 rounded-lg shadow-xl shadow-gray-300'>
        <div className='flex flex-col gap-4 py-6 border-b border-gray-500 justify-center items-center'>
          <div className='bg-slate-400 p-3 rounded-full'>
            <div className='bg-black p-8 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-16">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className='font-bold text-2xl'>
            {firstName} {lastName}
          </p>
        </div>
        <div className='p-8'>
          <a target='blank' href={`http://localhost:5173/register?ref=${user?.username}`} className='hover:underline'>http://localhost:5173/register?ref={user?.username}</a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='bg-white flex flex-col gap-4 p-4 rounded-lg shadow-xl shadow-gray-300'>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={ev => setFirstName(ev.target.value)}
            placeholder='John'
            className='border border-gray-300 p-2 w-full rounded-lg'
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={ev => setLastName(ev.target.value)}
            placeholder='doe'
            className='border border-gray-300 p-2 w-full rounded-lg'
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder='email@mail.com'
            className='border border-gray-300 p-2 w-full rounded-lg'
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={ev => setPhone(ev.target.value)}
            placeholder='0712435465'
            className='border border-gray-300 p-2 w-full rounded-lg'
            required
          />
        </div>
        {message && <p className='text-center'>{message}</p>}
        <button className='bg-primary text-white font-bold p-3 text-xl self-end rounded-lg w-3/5'>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default ProfilePage
