import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const ForgotPass = () => {
  const router = useRouter();
  return (
      <div className="user-auth-color h-screen flex justify-center items-center">
        <div className="rounded-xl bg-white w-[600px] h-[400px]">
          <Image src="/padlock.png" alt="" width={60} height={60} className="ml-64 mt-6"/>
          <div className="text-center">
            <b className="text-17xl inline-block">
              Enter new password
            </b>
          </div>
          <div className="mt-6 ml-16 inline-block">
              Password
          </div>
          <div className="flex items-center justify-center">
            <input className="h-12 border border-black w-4/5 rounded-md" type="password" placeholder="Enter password"></input>
          </div>
          <div className="mt-2 ml-16 inline-block">
              Confirm Password
          </div>
          <div className="flex items-center justify-center">
            <input className="h-12 border border-black w-4/5 rounded-md" type="password" placeholder="Enter password"></input>
          </div>
          <div className="flex items-center justify-center text-center mt-6">
            <div className="h-12 border border-black w-4/5 rounded-md bg-gradient-to-b from-amber-500 to-green-400 rounded-xl">
            <b className="inline-block mt-2">
              <Link href="/signin">Submit</Link>
            </b>
            </div>
          </div>
          <button className="ml-96 mt-3 font-semibold inline-block cursor-pointer">
            <Link href="/signin">Back to login</Link>
          </button>
        </div>
      </div>
  );
};

export default ForgotPass;
