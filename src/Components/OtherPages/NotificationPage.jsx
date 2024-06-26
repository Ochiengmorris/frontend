import React from 'react'
import NotificationCard from '../Cards/NotificationCard.jsx'

const NotificationPage = () => {
    return (
        <div className='px-4 mb-16 bg-gray-100'>
            <div className='py-4 mb-4 border-y border-black'>
                <h3 className='text-xl font-semibold'>Notifications</h3>
            </div>
            <div className='rounded-lg p-4 text-black bg-teal-200'>
                <NotificationCard />
            </div>
        </div>
    )
}

export default NotificationPage
