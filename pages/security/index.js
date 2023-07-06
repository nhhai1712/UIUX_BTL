import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function ProfileSettings() {
  const [currentPassword, setCurrentPassword] = useState('123456');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if(newPassword === currentPassword){
      alert("The new password cannot be the same as the old password");
      return;
    } 
    if(newPassword !== confirmPassword){
      alert("The new password and the confirm password are not the same");
      return;
    }
    // console.log("currentPassword: ", currentPassword);
    // console.log("newPassword: ", newPassword);
    // console.log("confirmPassword: ", confirmPassword);
  };
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
          <div className="absolute ml-72 w-[400px]">
            <div className="border-2 w-3/4 bg-gray-200 mt-5 rounded h-10 mb-2">
              <p className="mt-2 ml-2 text-sm text-gray-900 dark:text-white font-bold" role="none">
                Change Password
              </p>
            </div>
            <form>
              <div>
                <label htmlFor="currentPassword">Current Password</label>
                <br></br>
                <input
                  className="w-3/4 rounded h-[40px] p-2 mb-2"
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(event) => setCurrentPassword(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="newPassword">New Password</label>
                <br></br>
                <input
                  className="w-3/4 rounded h-[40px] p-2 mb-2"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm New Password:</label>
                <br></br>
                <input
                  className="w-3/4 rounded h-[40px] p-2 mb-2"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <button className="mt-2 ml-60 bg-gradient-to-b from-green-500 to-lime-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" 
                type="button" onClick={handleChangePassword()}>
                Save
              </button>
            </form>
        </div>
        <aside id="logo-sidebar" className="z-40 w-64 h-[538px] transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
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
      </div>
    </Layout>
  );
}

export default ProfileSettings;