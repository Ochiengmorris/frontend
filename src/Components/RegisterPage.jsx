import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Modal from './Modal/modal';
import { AnimatePresence } from 'framer-motion';


const RegisterPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [upline1, setUpline1] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [message, showMessage] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Extract the ref parameter from the URL and set the upline1 field
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ref = urlParams.get('ref');
        if (ref) {
            setUpline1(ref);
        }
    }, []);

    const togglePassword = (ev) => {
        ev.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        showMessage(false);

        if (password !== password2) {
            showMessage(true);
        } else {
            try {
                const response = await axios.post('/user/register', {
                    username, email, password, upline1,
                    firstname, lastname, phone
                });
                if (response.status === 201) {
                    setEmail('');
                    setPassword('');
                    setPassword2('');
                    setUsername('');
                    setUpline1('');
                    setFirstname('');
                    setLastname('');
                    setPhone('');
                    setModalMessage(response.data.message);
                    setShowModal(true);
                    setTimeout(() => {
                        setShowModal(false);
                        setRedirect(true);
                    }, 3000);
                }

            } catch (error) {
                console.error('Registration failed:', error);
                if (error.response) {
                    setModalMessage(error.response.data.message || 'Registration failed! Please try again.');
                    setShowModal(true)
                } else {
                    setModalMessage('Network error! Please try again later.');
                    setShowModal(true)
                }
            }
        }
    };

    if (redirect) {
        return <Navigate to={'/login'} />
    }


    return (
        <div className='bg-gray-900 h-screen p-4'>
            <div className="mt-16 p-4 bg-white border rounded-2xl">
                <div className="border border-gray-300 rounded-xl p-4">
                    <div className='relative flex justify-center'>
                        <h2 className='font-bold mb-8 text-2xl p-9 text-center w-full border-b border-gray-400'>Sign Up</h2>
                        <div className="absolute px-1 text-xs bg-white bottom-6 text-gray-400 mx-auto flex">
                            <p>YOU WERE INVITED BY {upline1}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className='flex flex-col'>
                            <label>Username</label>
                            <input type="text" placeholder='Username'
                                className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                value={username} onChange={ev => setUsername(ev.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col'>
                                <label>First Name</label>
                                <input type="text" placeholder='John'
                                    className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                    value={firstname} onChange={ev => setFirstname(ev.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Last Name</label>
                                <input type="text" placeholder='Doe'
                                    className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                    value={lastname} onChange={ev => setLastname(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label>Reffered by</label>
                            <input type="text" placeholder='His/her username'
                                className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                value={upline1} onChange={ev => setUpline1(ev.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex flex-col'>
                                <label>Email Address</label>
                                <input type="text" placeholder='example@user.com'
                                    className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                    value={email} onChange={ev => setEmail(ev.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Phone Number</label>
                                <input type="text" placeholder='0712345678'
                                    className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                    value={phone} onChange={ev => setPhone(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className='flex flex-col'>
                                <label>Password</label>
                                {showPassword ? (
                                    <div className='relative'>
                                        <input type="text" placeholder='Enter Passw..'
                                            className='border border-gray-500 w-full py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                            value={password} onChange={ev => setPassword(ev.target.value)}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={togglePassword} className="size-6 ize-6 absolute transform -translate-y-1/2 top-1/2 right-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className='relative'>
                                        <input type="password" placeholder='Enter Passw..'
                                            className='border border-gray-500 w-full py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                            value={password} onChange={ev => setPassword(ev.target.value)}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={togglePassword} className="size-6 ize-6 absolute transform -translate-y-1/2 top-1/2 right-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col'>
                                <label>Confirm Password</label>
                                {showPassword ? (
                                    <div className='relative'>
                                        <input type="text" placeholder='Enter Passw..'
                                            className='border border-gray-500 w-full py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                            value={password2} onChange={ev => setPassword2(ev.target.value)}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={togglePassword} className="size-6 ize-6 absolute transform -translate-y-1/2 top-1/2 right-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className='relative'>
                                        <input type="password" placeholder='Enter Passw..'
                                            className='border border-gray-500 w-full py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                            value={password2} onChange={ev => setPassword2(ev.target.value)}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={togglePassword} className="size-6 ize-6 absolute transform -translate-y-1/2 top-1/2 right-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            <input type="checkbox" name="remember-me" />
                            <span className='text-sm'>I have agreed to the terms and conditions</span>
                        </div>
                        <button className='bg-purple-700 rounded-lg items-center flex justify-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p className='font-bold text-white text-xl p-2'>Sign in</p>
                        </button>
                    </form>
                    <p className='flex gap-1 text-xs justify-center my-4'>
                        Already have an account ?
                        <Link to={'/login'} className='text-purple-600 underline'>Sign in here</Link>
                    </p>
                    {message && <p className='text-red-700 text-center text-sm'>Passwords do not match!</p>}
                </div>
            </div>
            <AnimatePresence>
                {showModal && (
                    <Modal
                        message={modalMessage}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </AnimatePresence>
        </div >
    )
}

export default RegisterPage