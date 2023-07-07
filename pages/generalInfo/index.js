import Layout from "@/components/Layout";
import Link from "next/link";
function generalInfo() {
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
        <div className="absolute ml-72 mt-6 w-[400px]">
            <b>Đang bảo trì, vui lòng quay lại sau! <br></br>Xin chân thành cảm ơn!</b>
        </div>
        <aside id="logo-sidebar" className="z-40 w-64 h-[538px] transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800 border-2">
              <ul className="mt-2 space-y-2 font-medium">
                <li>
                    <Link href="/generalInfo" className="nav-btn">
                      <span className="ml-3">General Information</span>
                    </Link>
                </li>
                <li>
                    <Link href="/userManage" className="nav-btn">
                      <span className="ml-3">User Management</span>
                    </Link>
                </li>
              </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export default generalInfo;