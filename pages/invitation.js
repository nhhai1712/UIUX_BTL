import { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

function Invitation() {
  const [pendingInvites, setPendingInvites] = useState([
    {
      id: 1,
      name: "Nguyễn Hoàng Hải",
      team: "test",
      status: "pending",
      avatar: "/man.png",
    },
    {
      id: 2,
      name: "Kiều Doãn Trung",
      team: "test1",
      status: "pending",
      avatar: "/man (1).png",
    },
  ]);

  const [invitationHistory, setInvitationHistory] = useState([]);

  const handleAccept = (id) => {
    const acceptedInvite = pendingInvites.find((invite) => invite.id === id);
    setPendingInvites(pendingInvites.filter((invite) => invite.id !== id));
    setInvitationHistory([...invitationHistory, { ...acceptedInvite, status: "accepted" }]);
  };

  const handleReject = (id) => {
    const rejectedInvite = pendingInvites.find((invite) => invite.id === id);
    setPendingInvites(pendingInvites.filter((invite) => invite.id !== id));
    setInvitationHistory([...invitationHistory, { ...rejectedInvite, status: "rejected" }]);
  };

  return (
    <Layout>
      <div>
        <div className="mt-20 ml-96  bg-gradient-to-b from-yellow-100 to-lime-100 w-2/5 h-[600px] rounded-tl-xl rounded-md drop-shadow-md relative border-2">
          <div className="flex mt-4 ml-4 justify-between">
            <span className="mb-4 text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">Invitations</span>
            <Link href="/homepage">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" trokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </Link>
          </div>
          <div className="border-b-2 border-gray-500"></div>
          <div className="">
            <div className="bg-gray-200 h-10 mt-10 w-11/12 ml-6">
              <p className="text-base font-medium text-gray-900 truncate dark:text-gray-300 p-2" role="none">
                Pending Invites
              </p>
            </div>
            <ul className="ml-5">
              {pendingInvites.map((invite) => (
                <li key={invite.id}>
                  <div className="mt-4 flex"> 
                    {/* <Image src="/man.png" alt="" width={48} height={48}></Image> */}
                    <Image src={invite.avatar} alt="" width={48} height={48}></Image>
                    <div className="flex-grow mt-2 ml-2 truncate">
                      <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                        {invite.name}
                      </p>
                      <p className="text-sm text-gray-900 truncate dark:text-gray-300" role="none">
                        invited you to join team <b className="truncate">{invite.team}</b>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mr-7">
                      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg" onClick={() => handleReject(invite.id)}>
                        Reject
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg" onClick={() => handleAccept(invite.id)}>  
                        Accept
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="bg-gray-200 h-10 mt-8 w-11/12 ml-6">
              <p className="text-base font-medium text-gray-900 truncate dark:text-gray-300 p-2" role="none">
                Invitation History
              </p>
            </div>
            <ul className="ml-5">
              {invitationHistory.map((invite) => (
                <li key={invite.id}>
                  <div className="mt-4 flex"> 
                    {/* <Image src="/man.png" alt="" width={48} height={48}></Image> */}
                    <Image src={invite.avatar} alt="" width={48} height={48}></Image>
                    <div className="mt-2 ml-2">
                      <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                        {invite.name}
                      </p>
                      <p className="text-sm text-gray-900 truncate dark:text-gray-300" role="none">
                        invited you to join team <b>{invite.team}</b>
                        {invite.status === "accepted" && <span className="text-green-500"> (accepted)</span>}
                        {invite.status === "rejected" && <span className="text-red-500"> (rejected)</span>}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Invitation;