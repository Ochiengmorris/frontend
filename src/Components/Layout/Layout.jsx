import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SideNav from '../SideNav.jsx'

const Layout = () => {
    const [showNav, setShowNav] = useState(false);
    const [blurClass, setBlurClass] = useState('');

    useEffect(() => {
        if (showNav) {
            setBlurClass('blur-sm');
        } else {
            setBlurClass('');
        }
    }, [showNav]);

    return (
        <div className='min-h-screen pb-8 bg-custom'>
            <div className='max-w-[1200px] mx-auto relative'>
                <div className={`${blurClass}`}>
                    <Header showNav={showNav} setShowNav={setShowNav} />
                    <Outlet />

                </div>

                <div className='fixed top-0 w-full'>
                    {showNav && (
                        <SideNav showNav={showNav} setShowNav={setShowNav} />
                    )}
                </div>
            </div>
            <div className='fixed bottom-0 text-center text-sm w-full'>
                <Footer />
            </div>

        </div>
    )
}

export default Layout