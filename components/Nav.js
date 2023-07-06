import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Nav({children}){
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [showConfirm, setShowConfirm] = useState(false);

  function handleSignoutClick() {
    setShowConfirm(true);
  }

  function handleConfirm() {
    setShowConfirm(false);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  return(
    <div>
      <div className="flex justify-end relative">  
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                </button>
                <Link href="/" className="flex ml-2 md:mr-24">
                  <Image src="/management.png" className="h-8 mr-3" alt="EasyManage logo" width={32} height={32}/>
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">EasyManage</span>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                    aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={togglePopup}>
                      <span className="sr-only">Open user menu</span>
                      <Image className="w-8 h-8 rounded-full" src="/man.png" alt="user photo" width={24} height={24}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {isOpen && (
            <div className="absolute z-50 my-14 text-base list-none bg-white divide-y divide-gray-100 rounded shadow 
            dark:bg-gray-700 dark:divide-gray-600 ml-96 w-48" id="dropdown-user">
                <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                  Nguyễn Hoàng Hải
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  test@gmail.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li className="">
                  <Link href="/perInfo" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/user.png" alt="" width={12} height={12} className="mr-1"/>
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link href="/invitation" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/invitation.png" alt="" width={12} height={12} className="mr-1"/>
                    Invitation
                  </Link>
                </li>
                <li>
                  <Link href="/activitylog" className="flex items-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/activity.png" alt="" width={12} height={12} className="mr-1"/>
                    Activity Log
                  </Link>
                </li>
                <li>
                  <Link href="/teamsettings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/settings.png" alt="" width={12} height={12} className="mr-1"/>
                    Team Settings
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/feedback.png" alt="" width={12} height={12} className="mr-1"/>
                    Send Feedback
                  </Link>
                </li>
                <li>
                  {/* <Link href="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <Image src="/log-out.png" alt="" width={12} height={12} className="mr-1"/>
                    Signout
                  </Link> */}
                  <Link href="" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" onClick={handleSignoutClick}>
                    <Image src="/log-out.png" alt="" width={12} height={12} className="mr-1"/>
                    Signout
                  </Link>
                  {showConfirm && (
                    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white rounded-md p-4">
                        <p className="mb-2">Are you sure you want to sign out?</p>
                        <div className="flex justify-end">
                          <button className="px-2 py-1 mr-2 bg-gray-200 rounded-md" onClick={handleCancel}>Cancel</button>
                          <button className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={handleConfirm}>
                            <Link href="/">Sign out</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}        
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full nav-bar border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li>
                    <Link href="/homepage" className="nav-btn">
                      <Image src="/house.png"  alt="" width={24} height={24} />
                      <span className="ml-3">Homepage</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard" className="nav-btn">
                      <Image src="/dashboard (1).png"  alt="" width={24} height={24}/>
                      <span className="ml-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/mytask" className="nav-btn">
                      <Image src="/task.png"  alt="" width={24} height={24}/>
                      <span className="ml-3">My task</span>
                    </Link>
                </li>
                <li>
                    <Link href="/team" className="nav-btn">
                      <Image src="/people.png"  alt="" width={24} height={24}/>
                      <span className="flex-1 ml-3 whitespace-nowrap">Team</span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Image src="/log-out.png"  alt="" width={24} height={24}/>
                      <span class="flex-1 ml-3 whitespace-nowrap">Signout</span>
                    </Link>
                </li>    */}
              </ul>
          </div>
        </aside>
      </div> 
      <div>
        {children}
      </div>
   </div>
  )
};