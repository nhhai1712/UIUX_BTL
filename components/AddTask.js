import React, { useState } from "react";
import Image from "next/image";
import AddTaskPer from "@/components/AddTaskPer"; 
import AddTaskTeam from "@/components/AddTaskTeam";
const AddTask = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const handleButtonClick = () => {
    setShowPopup1(true);
  };

  return (
    <div>
      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-900 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
      onClick={handleButtonClick}>Add Task</button>
      {showPopup1 && (
        <div className="overlay">
          <div className="popup">
            <div className="flex">
              <div className="mr-10 mt-5">
                <button className="flex items-center justify-center" onClick={() => setShowPopup2(true)}>
                  <b>Add Task Personal</b>
                  <Image className="ml-1" src="/download (3).png" alt="" width={24} height={24}/>
                </button>
              </div>
              <div className="mt-5">
                <button className="flex items-center justify-center" onClick={() => setShowPopup3(true)}>
                  <b>Add Task Team</b>
                  <Image className="ml-1" src="/people1.png" alt="" width={24} height={24}/>
                </button>
              </div>
            </div>
            <button className="ml-72 mt-10" onClick={() => setShowPopup1(false)}>Close</button>
          </div>
        </div>
      )}
      {showPopup2 && (
        <div className="overlay">
          <div className="popup">
            <b>Add Task Personal</b>
            <AddTaskPer/>
            <button className="ml-72 mt-10" onClick={() => setShowPopup2(false)}>Close</button>
          </div>
        </div>
      )}
      {showPopup3 && (
        <div className="overlay">
          <div className="popup">
            <b>Add Task Team</b>
            <AddTaskTeam/>
            <button className="ml-72 mt-10" onClick={() => setShowPopup3(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;