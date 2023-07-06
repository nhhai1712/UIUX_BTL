import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import classNames from 'classnames'
import { useState } from "react";
function ProfileSettings() {
  const [isSyncing1, setIsSyncing1] = useState(false)
  const [isSyncing2, setIsSyncing2] = useState(false)
  const [isSyncing3, setIsSyncing3] = useState(false)
  const handleClick1 = () => {
    setIsSyncing1(!isSyncing1);
  }
  const handleClick2 = () => {  
    setIsSyncing2(!isSyncing2)
  }
  const handleClick3 = () => {
    setIsSyncing3(!isSyncing3)
  }
  const switchClasses1 = classNames(
    'relative inline-block w-10 h-6 rounded-full',
    isSyncing1 ? 'bg-green-400' : 'bg-gray-400'
  )
  const switchClasses2 = classNames(
    'relative inline-block w-10 h-6 rounded-full',
    isSyncing2 ? 'bg-green-400' : 'bg-gray-400'
  )
  const switchClasses3 = classNames(
    'relative inline-block w-10 h-6 rounded-full',
    isSyncing3 ? 'bg-green-400' : 'bg-gray-400'
  )
  const toggleClasses1 = classNames(
    'absolute left-0 top-0 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out transform',
    isSyncing1 ? 'translate-x-full' : 'translate-x-0'
  )
  const toggleClasses2 = classNames(
    'absolute left-0 top-0 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out transform',
    isSyncing2 ? 'translate-x-full' : 'translate-x-0'
  )
  const toggleClasses3 = classNames(
    'absolute left-0 top-0 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out transform',
    isSyncing3 ? 'translate-x-full' : 'translate-x-0'
  )
  return (
    <Layout>
      <div className="mt-20 ml-96  bg-gradient-to-b from-yellow-100 to-lime-100 w-2/5 h-[600px] rounded-tl-xl rounded-md drop-shadow-md relative border-2">
        <div className="flex mt-4 ml-4 justify-between">
          <span className="mb-4 text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">Profile Settings</span>
          <Link href="/homepage">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" trokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </Link>
        </div>
        <div className="border-b-2 border-gray-500 w-full"></div>
        <div className="flex">
          <aside id="logo-sidebar" className="relative items-center z-40 w-64 h-[538px] transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800 border-2">
                <ul className="mt-2 space-y-2 font-medium">
                  <li>
                      <Link href="/perInfo" className="nav-btn">
                        <span className="ml-3">Personal Information</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="/security" className="nav-btn">
                        <span className="ml-3">Security</span>
                      </Link>
                  </li>
                  <li>
                      <Link href="/integration" className="nav-btn">
                        <span className="ml-3">Apps & Integrations</span>
                      </Link>
                  </li>
                </ul>
            </div>
          </aside>
          <div className="flex relative overflow-hidden">
            <ul class="">
              <li>
                <div className="flex bg-white border-gray border-2 ml-5 mt-5 h-[50px] w-[300px] items-center rounded-md justify-between">
                  <div className="flex">
                    <Image src="/google-calendar.png" alt="" width={24} height={24} className="ml-2 mr-2"></Image>
                    <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                      Google Calendar
                    </p>
                  </div>
                  <div className="flex items-center mr-2">
                    <div className={switchClasses1} onClick={handleClick1}>
                      <div className={toggleClasses1}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex bg-white border-gray border-2 ml-5 mt-5 h-[50px] w-[300px] items-center rounded-md justify-between">
                  <div className="flex">
                    <Image src="/zoom.png" alt="" width={24} height={24} className="ml-2 mr-2"></Image>
                    <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                      Zoom
                    </p>
                  </div>
                  <div className="flex items-center mr-2">
                    <div className={switchClasses2} onClick={handleClick2}>
                      <div className={toggleClasses2}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div className="flex bg-white border-gray border-2 ml-5 mt-5 h-[50px] w-[300px] items-center rounded-md justify-between">
                <div className="flex">
                  <Image src="/trello.png" alt="" width={24} height={24} className="ml-2 mr-2"></Image>
                  <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                    Trello
                  </p>
                </div>
                <div className="flex items-center mr-2">
                  <div className={switchClasses3} onClick={handleClick3}>
                    <div className={toggleClasses3}></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>          
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfileSettings;