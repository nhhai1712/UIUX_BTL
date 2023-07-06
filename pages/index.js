import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
const IntroPage = () => {
  return (
    <div>
      <div className="homepage-title flex justify-between items-center" >
        <div className="flex items-center m-5">
          <Image src="/management.png" alt="My image" color="black" width={100} height={100}/>
          <b className="text-3xl ml-5">EasyManage</b>
        </div>

        <div className="overflow-hidden cursor-pointer rounded-md">
          <div className="font-semibold inline-block btn-primary">
            <Link href='/signin'>
              Sign in
            </Link>
          </div>

          <div className="font-semibold inline-block btn-primary mr-10">
            <Link href='/signup'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center font-bold text-8xl mt-10">
          <b className="inline-block whitespace-pre-wrap">
          <p className=""> Manage</p>
          <p className="">by your way</p>
          </b>
        </div>
        <div className=" text-13xl font-semibold text-center mt-5">
          The joyful productivity web. Schedule time for todos, events forpersonal and teams.
        </div>
        <div className="flex justify-between">
          <Image className="ml-10" src="/task-list.png" alt="My image" color="black" width={300} height={300} /> 
          <Image className="mr-10" src="/qlcv.jpg" alt="My image" color="black" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
