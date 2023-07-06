import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

function ActivityLog() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('data/task-per.json');
      const tasks = await response.json();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  return (
    <Layout>
      <div className="max-h-500 overflow-y-auto mt-20 ml-96 bg-gradient-to-b from-yellow-100 to-lime-100 w-2/5 h-[600px] rounded-tl-xl rounded-md drop-shadow-md relative border-2">
        <div className="flex mt-4 ml-4 justify-between">
          <span className="mb-4 text-xl font-semibold sm:text-lg whitespace-nowrap dark:text-white">Activity Log</span>
          <Link href="/homepage">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
        <div className="border-b-2 border-gray-500"></div>
        <div className="mt-10 ml-6">
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center mb-4">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3 border-2 border-gray-300 w-10/12 h-[40px]">
                  <p className="text-sm font-medium text-gray-900 dark:text-white"><b>Nguyễn Hoàng Hải</b> has created a task {task.title}</p>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">{task.description}</p> */}
                  {/* <p className="text-sm text-gray-500 dark:text-gray-300">{new Date(activity.time).toLocaleString()}</p> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default ActivityLog;