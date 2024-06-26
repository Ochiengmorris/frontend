import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'
import Layout from './Components/Layout/Layout'
import ProfilePage from './Components/ProfilePage'
import IndexPage from './Components/DashboardPage'
import DepositPage from './Components/CashPage/DepositPage'
import WithdrawalPage from './Components/CashPage/WithdrawalPage'
import InvestmentPage from './Components/CashPage/InvestmentPage'
import SpinPage from './Components/OtherPages/SpinPage'
import StorePage from './Components/OtherPages/StorePage'
import ShopPage from './Components/OtherPages/ShopPage'
import axios from 'axios';
import { UserContextProvider } from './Components/UserContext'
import ContactUsPage from './Components/OtherPages/ContactUsPage'
import NotificationPage from './Components/OtherPages/NotificationPage'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080';


function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<IndexPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/deposit' element={<DepositPage />} />
            <Route path='/withdraw' element={<WithdrawalPage />} />
            <Route path='/investment-link' element={<InvestmentPage />} />
            <Route path='/spin' element={<SpinPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/notifications' element={<NotificationPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/applepay-store' element={<StorePage />} />
          </Route>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
