import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function ProfileSettings() {
  const [name, setName] = useState('Nguyễn Hoàng Hải');
  const [jobtitle, setJobtitle] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log("Jobtitle:", jobtitle);
    console.log('Country:', country);
    console.log('Phone:', phone);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobtitleChange = (event) => {
    setJobtitle(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleSave = () => {
    alert("Save successfully");
  }
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
          <div className="mt-2 flex"> 
            <Image src="/man.png" alt="" width={60} height={60}></Image>
            <div className="mt-2 ml-2">
              <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                Nguyễn Hoàng Hải
              </p>
              <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                test@gmail.com
              </p>
            </div>
          </div> 
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="">
              <label>
                <b>Name</b>
                <br></br>
                <input type="text" value={name} onChange={handleNameChange} className="w-3/4 rounded h-[40px] p-2 mb-2"/>
              </label>
              <br />
              <label>
                <b>Job title</b>
                <br></br>
                <input type="text" value={jobtitle} onChange={handleJobtitleChange} className="w-3/4 rounded h-[40px] p-2 mb-2"/>
              </label>
              <br />
              <label>
                <b>Country</b>
                <br></br>
                <input type="text" value={country} onChange={handleCountryChange} className="w-3/4 rounded h-[40px] p-2 mb-2"/>
              </label>
              <br />
              <label>
                <b>Phone number</b>
                <br></br>
                <input type="tel" value={phone} onChange={handlePhoneChange} className="w-3/4 rounded h-[40px] p-2 mb-2"/>
              </label>
              <br />
              <button className="mt-12 ml-60 bg-gradient-to-b from-green-500 to-lime-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => handleSave()}>
                Save
              </button>
            </form>
          </div>
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