import React, { useContext, useState } from 'react';
import mpesa_logo from '../../assets/mpesa-logo.png';
import { UserContext } from '../UserContext';
import axios from 'axios';
import Modal from '../Modal/modal';
import { AnimatePresence } from 'framer-motion';

const DepositPage = () => {
    const { user, setUser } = useContext(UserContext);

    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`/user/profile`);
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const owner = user._id;

        try {
            await axios.post('/finance/deposit', {
                owner, phone,
                depositamount: amount
            }).then(async (response) => {
                if (response.status === 200) {
                    setPhone('');
                    setAmount('');
                    setModalMessage(response.data.message);
                    setShowModal(true);
                    await fetchUserData();
                    setTimeout(() => {
                        handleCloseModal();
                    }, 3000);
                }
                // console.log(response);
            });
        } catch (error) {
            console.error('Deposit failed:', error);
            setModalMessage('Deposit failed. Please try again later.');
            setShowModal(true)
            setEmail('');
            setPassword('');
        }

    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='px-4 mb-16'>
            <div className='py-4 mb-4 border-y border-black'>
                <h3 className='text-xl font-semibold'>Deposit</h3>
            </div>
            <div className='max-w-[500px] mx-auto'>
                <div className="bg-red-300 shadow p-4 mb-4 rounded-lg">
                    <p className='text-sm'><b>Notice:</b> Do not pay outside the payment method provided on site</p>
                </div>
                <div className='bg-gray-200 shadow-lg shadow-gray-400 rounded-t-lg'>
                    <img src={mpesa_logo} alt="Mpesa Logo" />
                </div>
                <div className='bg-white px-4 mb-4 flex flex-col shadow-lg rounded-b-lg'>
                    <h3 className='font-bold text-lg py-4'>Fund Deposit (own user)</h3>
                    <div className="bg-green-300 p-4 mb-4 rounded-lg">
                        <p className='text-sm'>You will receive payment request on your phone. Input your Mpesa pin to complete the transaction.</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 pb-4'>
                        <div className="flex flex-col gap-2">
                            <p>Amount</p>
                            <div className='bg-gray-300 flex rounded-lg overflow-hidden'>
                                <label className='bg-gray-300 py-2 px-3'>KES</label>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={ev => setAmount(ev.target.value)}
                                    placeholder='0'
                                    className='border border-gray-300 p-2 w-full'
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Phone Number</p>
                            <div className='bg-gray-300 flex rounded-lg overflow-hidden'>
                                <label className='bg-gray-300 py-2 px-3'>+254</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={ev => setPhone(ev.target.value)}
                                    placeholder='0712345678'
                                    className='border border-gray-300 p-2 w-full'
                                    required
                                />
                            </div>
                        </div>
                        <button type='submit' className='bg-primary text-white font-semibold p-2 mt-2 rounded-lg'>
                            Deposit {amount}
                        </button>
                    </form>
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
        </div>
    );
};

export default DepositPage;
