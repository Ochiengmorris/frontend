import React from 'react'
import { FaPhoneVolume, FaRegEnvelope, FaStreetView } from "react-icons/fa6";

const ContactUsPage = () => {
    return (
        <div className='px-4 mb-16'>
            <div className='py-4 mb-4 border-y border-black'>
                <h3 className='text-xl font-semibold'>Contact Us</h3>
            </div>
            <div className='max-w-[600px] mx-auto bg-white rounded-lg p-4'>
                <h3 className='font-bold text-xl'>Information</h3>
                <div className='my-2'>
                    <p>
                        We'd love to hear from you! If you have any questions or need assistance, please don't hesitate to get in touch with us using the following contact Information:
                    </p>
                    <div className='border border-gray-500 rounded-lg p-4 flex flex-col mt-2 gap-4'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <FaPhoneVolume className='text-teal-800 size-7' />
                            </div>
                            <div>
                                <p className='font-bold'>Mobile Number</p>
                                <p>+254742642356</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <FaStreetView className='text-teal-800 size-7' />
                            </div>
                            <div>
                                <p className='font-bold'>Address</p>
                                <p>www.mj-online.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <FaRegEnvelope className='text-teal-800 size-7' />
                            </div>
                            <div>
                                <p className='font-bold'>Email Address</p>
                                <p>info@mj-online.com</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-20 pb-4 flex flex-col'>
                    <h3 className='py-1 my-2 font-bold text-lg border-b border-gray-400'>MJ Online Stores</h3>
                    <p>
                        Thank you for choosing MJ-online as your trusted partner to earn online. We are committed to providing you with a seamless and secure onilne experience.
                    </p>
                    <a target='blank' href="#" className='mt-4 font-semibold'>Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default ContactUsPage
