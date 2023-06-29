import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const ForgotPass = () => {
  const router = useRouter();
  return (
      <div className="user-auth-color h-screen flex justify-center items-center">
        <div className="rounded-xl bg-white w-[600px] h-[400px]">
          <Image src="/lock.png" alt="" width={60} height={60} className="ml-64 mt-6"/>
          <div className="text-center">
            <b className="text-17xl inline-block">
              Forgot password?
            </b>
            <br></br>
            <div className="inline-block">
              Enter your email to get the verification code
            </div>
          </div>
          <div className="mt-6 ml-16 inline-block">
              Email
          </div>
          <div className="flex items-center justify-center">
            <input className="h-12 border border-black w-4/5 rounded-md" type="email" placeholder="Enter email">
            </input>
          </div>
          <div className="flex items-center justify-center text-center mt-8">
            <div className="h-12 border border-black w-4/5 rounded-md bg-gradient-to-b from-amber-500 to-green-400">
            <b className="inline-block mt-2">
              <Link href="/newpass">Next</Link>
            </b>
            </div>
          </div>
          <button className="ml-96 mt-5 font-semibold inline-block cursor-pointer">
            <Link href="/signin">Back to login</Link>
          </button>
        </div>
      </div>
  );
};

export default ForgotPass;
