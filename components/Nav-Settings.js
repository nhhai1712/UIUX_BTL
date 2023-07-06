import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
function ProfileSettings() {
  return (
    <Layout>
      <div className="mt-20 ml-96  bg-gradient-to-b from-yellow-100 to-lime-100 w-2/5 h-[600px] rounded-tl-xl rounded-md drop-shadow-md relative border-2">
        <div className="flex mt-4 ml-4">
          <span className="mb-4 text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">Profile Settings</span>
        </div>
        <div className="border-b-2 border-gray-500 w-full"></div>
        <aside id="logo-sidebar" className="z-40 w-64 h-[538px] transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800 border-2 flex">
              <ul className="mt-2 space-y-2 font-medium">
                <li>
                    <Link href="/profileSetting" className="nav-btn">
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