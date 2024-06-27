import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import Modal from './Modal/modal';
import { AnimatePresence } from 'framer-motion';


const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const togglePassword = (ev) => {
        ev.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = async (ev) => {
        ev.preventDefault();

        try {
            const response = await axios.post('/user/login', {
                email,
                password
            })
            if (response.status === 200) {
                setUser(response.data);
                setEmail('');
                setPassword('');
                setModalMessage('Login successful! Redirecting');
                setShowModal(true);
                setTimeout(() => {
                    handleCloseModal();
                }, 3000);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setModalMessage('Login failed. Please try again later.');
            setShowModal(true)
            setEmail('');
            setPassword('');
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='bg-gray-900 h-screen p-4 flex items-center'>
            <div className=" p-4 bg-white border rounded-2xl mx-auto  max-w-[400px]">
                <div className="border border-gray-300 rounded-xl p-4">
                    <div className='relative flex justify-center'>
                        <h2 className='font-bold mb-8 text-2xl p-9 text-center w-full border-b border-gray-400'>Sign In</h2>
                        <div className="absolute px-1 bg-white bottom-5 text-gray-400 mx-auto flex">
                            <p>Login to your account</p>
                        </div>
                    </div>
                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        <div className='flex flex-col'>
                            <label>Email Address</label>
                            <input type="text"
                                placeholder='Email Address'
                                className='border border-gray-500 py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                value={email} onChange={ev => setEmail(ev.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label>Enter Password</label>
                            {showPassword ? (
                                <div className='relative'>
                                    <input type="text" placeholder='Enter Password'
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
                                    <input type="password" placeholder='Enter Password'
                                        className='border border-gray-500 w-full py-1 px-2 rounded-lg focus:outline-none focus:border-purple-500'
                                        value={password} onChange={ev => setPassword(ev.target.value)}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={togglePassword} className="size-6 ize-6 absolute transform -translate-y-1/2 top-1/2 right-2 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className='flex gap-1'>
                            <input type="checkbox" name="remember-me" />
                            <span>Remember me</span>
                        </div>
                        <div className='self-end text-purple-600'>Forgot Password ?</div>
                        <button className='bg-purple-700 rounded-lg items-center flex justify-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                            <p className='font-bold text-white text-xl p-2'>Sign in</p>
                        </button>
                    </form>
                    <p className='flex gap-1 text-xs justify-center my-4'>
                        Don't have an account yet?
                        <Link to={'/register'} className='text-purple-600 underline'>Sign up here</Link>
                    </p>
                    <p className='flex gap-1 text-xs justify-center my-4'>
                        Do not share your Login credentials with anyone.
                    </p>
                </div>
            </div>
            <AnimatePresence>
                {showModal && (
                    <Modal
                        message={modalMessage}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </div >
    )
}

export default LoginPage