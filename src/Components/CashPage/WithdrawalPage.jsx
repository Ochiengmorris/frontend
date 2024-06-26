import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import axios from 'axios';
import Modal from '../Modal/modal';
import { AnimatePresence } from 'framer-motion';



const WithdrawalPage = () => {
    const { user, setUser } = useContext(UserContext);

    // const [balance, setBalance] = useState(0);
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
        const phone = user.phone;
        // Add your form submission logic here
        try {
            await axios.post('/finance/withdraw', {
                owner, phone,
                withdrawamount: amount
            }).then(async response => {
                if (response.status === 200) {
                    setAmount('');
                    setModalMessage(response.data.message);
                    setShowModal(true);
                    await fetchUserData();
                    setTimeout(() => {
                        handleCloseModal();
                    }, 3000);
                } else {
                    setModalMessage(response.data.message);
                    setShowModal(true);
                }
            });
        } catch (error) {
            console.error('Withdrawal failed:', error);
            setModalMessage(error.response.data.message);
            setShowModal(true)
            setAmount('');
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className='px-4 mb-16 bg-gray-100'>
            <div className='py-4 mb-4 border-y border-black'>
                <h3 className='text-xl font-semibold'>Withdawals</h3>
            </div>
            <div className='px-4 bg-white pb-2 shadow-xl shadow-gray-300 rounded-lg'>
                <div className="flex items-center justify-between border-b font-bold">
                    <p className='py-2'>Current balance</p>
                    <p>KES {user?.amount}</p>
                </div>
                <div className='my-2 flex flex-col gap-4'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                        <label>Amount</label>
                        <input
                            type="text"
                            value={amount}
                            onChange={ev => setAmount(ev.target.value)}
                            placeholder='0'
                            className='border border-gray-300 p-2 w-full rounded-lg'
                            required
                        />
                        <button type='submit' className='bg-primary text-white mt-8 font-semibold p-2 rounded-lg'>
                            Withdraw {amount}
                        </button>
                    </form>
                    <div className="bg-teal-200 shadow p-4 mb-4 rounded-lg">
                        <p className='text-sm'><b>Notice:</b> You will be charged 5% transaction fee.</p>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-white mt-4 shadow-xl shadow-gray-300 rounded-lg'>
                <div className="flex border justify-between">
                    <div className='font-bold text-sm p-2 border-r'>ID</div>
                    <div className='font-bold text-sm p-2 border-r'>Withdrawn</div>
                    <div className='font-bold text-sm p-2 border-r'>Disbursed</div>
                    <div className='font-bold text-sm p-2 border-r'>Date</div>
                    <div className='font-bold text-sm p-2 '>Status</div>
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
    )
}

export default WithdrawalPage
