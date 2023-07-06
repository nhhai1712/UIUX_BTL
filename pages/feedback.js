import Layout from "@/components/Layout";
import Link from "next/link";
function Feedback() {
    const handleSendFeedback = () => {
        alert("Send feedback successfully");
    }
    return (
    <Layout>
      <div className="max-h-500 overflow-y-auto mt-20 ml-96 bg-gradient-to-b from-yellow-100 to-lime-100 w-2/5 h-[600px] rounded-tl-xl rounded-md drop-shadow-md relative border-2">
        <div className="flex mt-4 ml-4 justify-between">
          <span className="mb-4 text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">Feedback</span>
          <Link href="/homepage">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
        <div className="border-b-2 border-gray-500"></div>
        <div className="ml-6 mt-6">
            <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                Comments
            </p>
            <textarea className="mt-2 w-11/12 h-[200px] border-gray-300 rounded-md" placeholder="Write your feedback here..."></textarea>
            <input className="mt-2" type="file"/>
        </div>
        <div className="ml-9">
            <button className="mt-12 ml-96 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => handleSendFeedback()}>
                Send Feedback
            </button>
        </div>
      </div>
    </Layout>
  );
}

export default Feedback;