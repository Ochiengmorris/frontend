import React from 'react'
import { FaAngleLeft, FaBookmark, FaLocationDot } from "react-icons/fa6";
import shoe_1 from '../../assets/shoe-1.jpg';
import shoe_2 from '../../assets/shoe-2.jpg';

const StorePage = () => {
    return (
        <div className=' mb-16 '>
            <div className='p-2 mb-4 bg-gray-400 '>
                <div className="bg-white rounded p-2 flex gap-2 items-center">
                    <FaAngleLeft className='size-6' />
                    <input type="text" placeholder='Search in All Items' className='grow focus:outline-none' />
                    <FaBookmark />
                </div>
            </div>
            <div className="px-2 container">
                <h3 className='mb-4 font-bold'>Shoes & Sneakers in Kenya</h3>

                <div className='grid gap-2 grid-cols-2 lg:grid-cols-3'>
                    <div class="border rounded-lg shadow-xl overflow-hidden h-[fit-content]">
                        <div>
                        <img src={shoe_1} alt="Calvin Klein Shoes" class="w-full h-auto" />
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-lg'>KSh 3,000</p>
                            <h2 class="text-md">Calvin Klein Shoes Outdoor hiking shoes</h2>
                            <div className='flex items-center gap-1'>
                                <FaLocationDot />
                                <p className='text-gray-400'>Mombasa, Coast</p>
                            </div>
                            <button className='bg-teal-800 text-white font-bold w-full p-3 mt-2 rounded'>Add to cart</button>
                        </div>

                    </div>
                    <div class="border rounded-lg shadow-xl overflow-hidden h-[fit-content]">
                        <div>
                        <img src={shoe_1} alt="Calvin Klein Shoes" class="w-full h-auto" />
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-lg'>KSh 3,000</p>
                            <h2 class="text-md">Calvin Klein Shoes Outdoor hiking shoes</h2>
                            <div className='flex items-center gap-1'>
                                <FaLocationDot />
                                <p className='text-gray-400'>Mombasa, Coast</p>
                            </div>
                            <button className='bg-teal-800 text-white font-bold w-full p-3 mt-2 rounded'>Add to cart</button>
                        </div>

                    </div>
                    <div class="border rounded-lg shadow-xl overflow-hidden h-[fit-content]">
                        <div>
                        <img src={shoe_1} alt="Calvin Klein Shoes" class="w-full h-auto" />
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-lg'>KSh 3,000</p>
                            <h2 class="text-md">Calvin Klein Shoes Outdoor hiking shoes</h2>
                            <div className='flex items-center gap-1'>
                                <FaLocationDot />
                                <p className='text-gray-400'>Mombasa, Coast</p>
                            </div>
                            <button className='bg-teal-800 text-white font-bold w-full p-3 mt-2 rounded'>Add to cart</button>
                        </div>

                    </div>
                    <div class="border rounded-lg shadow-xl overflow-hidden h-[fit-content]">
                        <div>
                        <img src={shoe_1} alt="Calvin Klein Shoes" class="w-full h-auto" />
                        </div>
                        <div className='p-4'>
                            <p className='font-bold text-lg'>KSh 3,000</p>
                            <h2 class="text-md">Calvin Klein Shoes Outdoor hiking shoes</h2>
                            <div className='flex items-center gap-1'>
                                <FaLocationDot />
                                <p className='text-gray-400'>Mombasa, Coast</p>
                            </div>
                            <button className='bg-teal-800 text-white font-bold w-full p-3 mt-2 rounded'>Add to cart</button>
                        </div>

                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default StorePage
