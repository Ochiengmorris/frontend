import React, { useContext } from 'react'
import NotificationCard from './Cards/NotificationCard'
import GridItem from '../Data/GridItem'
import AreaChart from './Charts/AreaChart'
import WorldMap from '../Data/WorldMap'
import img_1 from '../assets/img-1.jpg';
import img_2 from '../assets/img-2.jpg';
import img_3 from '../assets/img-3.jpg';
import img_4 from '../assets/img-4.jpg';
import img_5 from '../assets/img-5.jpg';
import MoneyDashCards from './Cards/MoneyDashCards'
import { UserContext } from './UserContext'


const IndexPage = () => {

  const { user } = useContext(UserContext);

  return (
    <div className='grid gap-4 px-6 pt-4 pb-16'>
      {/*  Notice Card */}
      <div className="rounded-lg p-4 text-black bg-teal-200">
        <NotificationCard />
      </div>
      <MoneyDashCards />
      <div className="bg-gray-900 p-4 rounded-xl">
        <h3 className='text-white font-semibold mb-4'>My Unique Invite Link</h3>
        <div className='w-full flex'>
          <input type="text" placeholder='My unique invite link' value={`http://localhost:5173/register?ref=${user ? user.username : ''}`} className='p-2 w-full rounded-l-lg' readOnly />
          <button className='text-white px-4 py-2 bg-purple-500 font-semibold rounded-r-lg'>Copy</button>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
        <div>
          <GridItem title={'Invitations Traffic'}>
            <AreaChart />
          </GridItem>
        </div>
        <div className='text-white w-full bg-slate-900 py-4 flex flex-col justify-center rounded-xl text-center'>
          <div className='py-5'>
            <h3 className='font-bold text-2xl'>0</h3>
            <p>Total Invitations + 2.43%</p>
          </div>
          <div className='border-t py-5'>
            <h3 className='font-bold text-2xl'>0</h3>
            <p>Active Invitations + 12.43%</p>
          </div>
          <div className='border-t py-5'>
            <h3 className='font-bold text-2xl'>0</h3>
            <p>Dormant Invitations + 5.43%</p>
          </div>
        </div>
      </div>

      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
        <div className="bg-white mb-4 rounded-xl">
          <h3 className='font-bold p-4 border-b border-gray-400 w-full'>Applepay Invitations</h3>
          <div className='px-4 border-b border-gray-400'>
            <div className='py-2 mt-2 gap-1 flex flex-col'>
              <label>My Username</label>
              <input type="text"
                placeholder='myusername@gmail.com'
                value={`${user ? user.username : ''}`}
                className='p-2 w-full rounded-lg border border-gray-500'
                readOnly
              />
            </div>
            <div className=' py-2 gap-1 flex flex-col'>
              <label>Invited by</label>
              <input type="text"
                placeholder='Admin'
                value={`${user ? user.upline1 : ''}`}
                className='p-2 w-full rounded-lg border border-gray-500'
                readOnly
              />
            </div>
            <div className=' py-2 mb-4 gap-1 flex flex-col'>
              <label>My Unique Invite Link</label>
              <div className='w-full flex'>
                <input type="text"
                  placeholder='My unique invite link'
                  value={`http://localhost:5173/register?ref=${user ? user.username : ''}`}
                  className='p-2 w-full rounded-l-lg border border-gray-500' readOnly />
                <button className='text-white px-4 py-2 bg-purple-500 font-semibold rounded-r-lg'>Copy</button>
              </div>
            </div>
          </div>
          <div className='p-4 flex justify-between border-b border-gray-500'>
            <h3>All Invitations</h3>
            <div className='border border-black rounded-full bg-red-500 text-white font-bold px-1'>
              <p>0</p>
            </div>
          </div>
          <div className='p-4 flex justify-between border-b border-gray-500'>
            <h3>Active</h3>
            <div className='border border-black rounded-full bg-green-500 text-white font-bold px-1'>
              <p>0</p>
            </div>
          </div>
          <div className='p-4 flex justify-between'>
            <h3>Dormant</h3>
            <div className='border border-black rounded-full bg-purple-500 text-white font-bold px-1'>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className='grid gap-4 mb-4'>
          <div className="border border-black flex justify-between items-center bg-white rounded-xl p-4">
            <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
            <div className='text-sm'>
              <p className='font-bold'>Facebook Followers</p>
              <p>22.14% Since Last Week</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='currentColor' className='size-9'>
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </div>
          <div className="border border-black flex justify-between items-center bg-white rounded-xl p-4">
            <div className="radial-progress text-accent" style={{ "--value": 62 }} role="progressbar">62%</div>
            <div className='text-sm'>
              <p className='font-bold'>Youtube Subscribers</p>
              <p>15.14% Since Last Week</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='currentColor' className='size-9'>
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </div>
          <div className="border border-black flex justify-between items-center bg-white rounded-xl p-4">
            <div className="radial-progress text-secondary" style={{ "--value": 79 }} role="progressbar">79%</div>
            <div className='text-sm'>
              <p className='font-bold'>X Tweets</p>
              <p>32.14% Since Last Week</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='currentColor' className='size-9'>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
        </div>

      </div>




      <div className='bg-slate-900 rounded-xl overflow-hidden'>
        <GridItem title={'Selling Region'}>
          <WorldMap />
        </GridItem>
        <div className="grid grid-cols-3 px-2 py-3 bg-slate-700 text-white">
          <div className='font-bold'>Country</div>
          <div className='font-bold'>Income</div>
          <div className='font-bold'>Trend</div>
        </div>
        <div className="grid grid-cols-3 px-2 py-3 bg-white text-black">
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 512 512" className='size-5'>
              <path fill="#bd3d44" d="M0 0h512v512H0" />
              <path stroke="#fff" strokeWidth="40" d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512" />
              <path fill="#192f5d" d="M0 0h390v275H0z" />
              <marker id="us-a" markerHeight="30" markerWidth="30">
                <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
              </marker>
              <path fill="none" markerMid="url(#us-a)" d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z" />
            </svg>
            USA
          </div>
          <div className=''>$ 4,586</div>
          <div className=''>Trend</div>
        </div>
        <div className="grid grid-cols-3 px-2 py-3 bg-white text-black">
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ca" viewBox="0 0 512 512" className='size-5'>
              <path fill="#fff" d="M81.1 0h362.3v512H81.1z" />
              <path fill="#d52b1e" d="M-100 0H81.1v512H-100zm543.4 0h181.1v512H443.4zM135.3 247.4l-14 4.8 65.4 57.5c5 14.8-1.7 19.1-6 26.9l71-9-1.8 71.5 14.8-.5-3.3-70.9 71.2 8.4c-4.4-9.3-8.3-14.2-4.3-29l65.4-54.5-11.4-4.1c-9.4-7.3 4-34.8 6-52.2 0 0-38.1 13.1-40.6 6.2l-9.9-18.5-34.6 38c-3.8 1-5.4-.6-6.3-3.8l16-79.7-25.4 14.3c-2.1.9-4.2 0-5.6-2.4l-24.5-49-25.2 50.9c-1.9 1.8-3.8 2-5.4.8l-24.2-13.6 14.5 79.2c-1.1 3-3.9 4-7.1 2.3l-33.3-37.8c-4.3 7-7.3 18.4-13 21-5.7 2.3-25-4.9-37.9-7.7 4.4 15.9 18.2 42.3 9.5 51z" />
            </svg>
            Canada
          </div>
          <div className=''>$ 3,821</div>
          <div className=''>Trend</div>
        </div>
        <div className="grid grid-cols-3 px-2 py-3 bg-white text-black">
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icons-in" viewBox="0 0 512 512" className='size-5'>
              <path fill="#f93" d="M0 0h512v170.7H0z" />
              <path fill="#fff" d="M0 170.7h512v170.6H0z" />
              <path fill="#128807" d="M0 341.3h512V512H0z" />
              <g transform="translate(256 256)scale(3.41333)">
                <circle r="20" fill="#008" />
                <circle r="17.5" fill="#fff" />
                <circle r="3.5" fill="#008" />
                <g id="in-d">
                  <g id="in-c">
                    <g id="in-b">
                      <g id="in-a" fill="#008">
                        <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                        <path d="M0 17.5.6 7 0 2l-.6 5z" />
                      </g>
                      <use xlinkHref="#in-a" width="100%" height="100%" transform="rotate(15)" />
                    </g>
                    <use xlinkHref="#in-b" width="100%" height="100%" transform="rotate(30)" />
                  </g>
                  <use xlinkHref="#in-c" width="100%" height="100%" transform="rotate(60)" />
                </g>
                <use xlinkHref="#in-d" width="100%" height="100%" transform="rotate(120)" />
                <use xlinkHref="#in-d" width="100%" height="100%" transform="rotate(-120)" />
              </g>
            </svg>


            India
          </div>
          <div className=''>$ 2.093</div>
          <div className=''>Trend</div>
        </div>
        <div className="grid grid-cols-3 px-2 py-3 bg-white text-black">
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-sh" viewBox="0 0 512 512" className='size-5'>
              <path fill="#012169" d="M0 0h512v512H0z" />
              <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
              <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z" />
              <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
              <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
            </svg>

            Uk
          </div>
          <div className=''>$ 3,254</div>
          <div className=''>Trend</div>
        </div>
        <div className="grid grid-cols-3 px-2 py-3 bg-white text-black">
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-de" viewBox="0 0 512 512" className='size-5'>
              <path fill="#fc0" d="M0 341.3h512V512H0z" />
              <path fill="#000001" d="M0 0h512v170.7H0z" />
              <path fill="red" d="M0 170.7h512v170.6H0z" />
            </svg>
            Germany
          </div>
          <div className=''>$ 3,255</div>
          <div className=''>Trend</div>
        </div>
      </div>
      <div className=" border p-4 bg-white rounded-xl">
        <div className='border-b border-black pb-3 mb-3'>
          <h3 className='text-lg mb-2'>Total Earnings</h3>
          <p className='font-bold text-2xl'>$287,493</p>
          <p className='text-sm'>+1.4% Since last month</p>
        </div>
        <div className=''>
          <h3 className='text-lg mb-2'>Total Sales</h3>
          <p className='font-bold text-2xl'>$87,493</p>
          <p className='text-sm'>+4.4% Since last month</p>
        </div>
      </div>
      <div className='bg-white rounded-xl'>
        <div className='flex font-semibold items-center justify-between border-black border-b p-4'>
          <h3 className='text-lg'>Customer Review</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <div className='h-72 overflow-y-auto'>
          <div className="flex gap-4 justify-between items-center p-4 shadow-md">
            <div>
              <div className="w-14 border overflow-hidden h-14 rounded-full flex">
                <img src={img_1} className="w-full object-cover" alt="User Avatar" />
              </div>
            </div>
            <div className="">
              <div className='flex items-center justify-between'>
                <div className="text-sm font-bold text-gray-900">Iphone 11</div>
                <div className="text-xs text-gray-500">08.34 AM</div>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="">Sara Jhon:</span> This is a very nice phone in low budget.
              </div>
            </div>
            <div className="ml-auto pl-0">
              <div className="flex text-yellow-400">
                <div>&#9733;</div> <div>&#9733;</div> <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-center p-4 shadow-md">
            <div>
              <div className="w-14 border overflow-hidden h-14 rounded-full flex">
                <img src={img_2} className="w-full object-cover" alt="User Avatar" />
              </div>
            </div>
            <div className="">
              <div className='flex items-center justify-between'>
                <div className="text-sm font-bold text-gray-900">Iphone X</div>
                <div className="text-xs text-gray-500">04.32 PM</div>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="">Christine:</span> Good low budget phone for me yaay.
              </div>
            </div>
            <div className="ml-auto pl-0">
              <div className="flex text-yellow-400">
                <div>&#9733;</div> <div>&#9733;</div> <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-center p-4 shadow-md">
            <div>
              <div className="w-14 border overflow-hidden h-14 rounded-full flex">
                <img src={img_3} className="w-full object-cover" alt="User Avatar" />
              </div>
            </div>
            <div className="">
              <div className='flex items-center justify-between'>
                <div className="text-sm font-bold text-gray-900">Air Pod</div>
                <div className="text-xs text-gray-500">08.34 AM</div>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="">Dennis Mutinda:</span> Good quality music .
              </div>
            </div>
            <div className="ml-auto pl-0">
              <div className="flex text-yellow-400">
                <div>&#9733;</div> <div>&#9733;</div> <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-center p-4 shadow-md">
            <div>
              <div className="w-14 border overflow-hidden h-14 rounded-full flex">
                <img src={img_4} className="w-full object-cover" alt="User Avatar" />
              </div>
            </div>
            <div className="">
              <div className='flex items-center justify-between'>
                <div className="text-sm font-bold text-gray-900">Air Pod</div>
                <div className="text-xs text-gray-500">11.34 PM</div>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="">Christine Law:</span> Nice new products from apple.
              </div>
            </div>
            <div className="ml-auto pl-0">
              <div className="flex text-yellow-400">
                <div>&#9733;</div> <div>&#9733;</div> <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-center p-4 shadow-md">
            <div>
              <div className="w-14 border overflow-hidden h-14 rounded-full flex">
                <img src={img_5} className="w-full object-cover" alt="User Avatar" />
              </div>
            </div>
            <div className="">
              <div className='flex items-center justify-between'>
                <div className="text-sm font-bold text-gray-900">Macbook Pro</div>
                <div className="text-xs text-gray-500">07.14 AM</div>
              </div>
              <div className="mt-1 text-sm text-gray-700">
                <span className="">Michie:</span> The brand is very is original.
              </div>
            </div>
            <div className="ml-auto pl-0">
              <div className="flex text-yellow-400">
                <div>&#9733;</div> <div>&#9733;</div> <div>&#9733;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl">
        <div className='flex font-semibold items-center justify-between border-black border-b p-4'>
          <h3 className='text-lg'>Order Summary</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <div className='p-4'>
          <div className='flex justify-between font-bold bg-gray-100 p-2'>
            <div>ID</div>
            <div>Product</div>
            <div>Date</div>
            <div>Price</div>
            <div>Status</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IndexPage
