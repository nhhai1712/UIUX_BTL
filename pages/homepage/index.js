import Layout from "@/components/Layout";
import { useState, useEffect } from "react"
function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [tasksPer, setTaskPer] = useState([]);
  const [tasksTeam, setTaskTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [taskPerResponse, taskTeamResponse] = await Promise.all([
          fetch("/data/task-per.json"),
          fetch("/data/task-team.json"),
        ]);
  
        const taskPerData = await taskPerResponse.json();
        const taskTeamData = await taskTeamResponse.json();
  
        setTaskPer(taskPerData);
        setTaskTeam(taskTeamData);
        const allTasks = taskPerData.concat(taskTeamData); 

        setTasks(allTasks);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();  
  }, []);

  const todayTasks = tasks.filter((task) => {
    const taskDate = new Date(task.duedate);
    const todayDate = new Date();
    console.log(todayDate.getMonth() + "/" + taskDate.getMonth() + "/" + task.title);

    return (

      taskDate.getFullYear() === todayDate.getFullYear() &&
      (taskDate.getMonth() >= todayDate.getMonth() || (taskDate.getMonth() === todayDate.getMonth()) && taskDate.getDate() >= todayDate.getDate())
      // taskDate.getDate() === todayDate.getDate() 
    );
  });
  return (
    <Layout>
      <div>
        <div className="mt-20 ml-72 bg-gradient-to-b from-lime-500 to-yellow-500 w-1/5 rounded-tl-xl rounded-xl border flex">
          <div className="m-2">
            <b>Welcome to EasyManage</b>
            <br></br>
            <b>Have a great day</b>
          </div>
        </div>
        <div className="mt-10 w-2/5 h-[300px] max-h-50 overflow-y-auto ml-72 bg-red-200 rounded-xl">
          <b className="ml-4">Today Tasks</b>
            {todayTasks.length === 0 ? (
              <p className="ml-4">No tasks for today.</p>
            ) : (
              <ul className="ml-3">
                {todayTasks.map((task) => (
                  <li className='rounded-md'
                    style={{
                      padding: '8px',
                      margin: '4px',
                      minHeight: '50px',
                      backgroundColor: 'rgb(241 245 249)',
                      cursor: 'pointer',
                    }}
                    key={task.id}><b>{task.title}</b>
                    <div className="mt-2 flex justify-start">
                      <div className={task.priority}>
                        <div>{task.priority}</div>
                      </div>
                      
                      <div className="border-2 border-black rounded-lg bg-purple-400 text-center w-1/5 mr-2">{task.duedate}</div>
                      <div className="border-2 border-black rounded-lg bg-blue-200 text-center w-1/5">{task.tags}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-20 ml-72 bg-gradient-to-b from-lime-500 to-yellow-500 w-1/5 rounded-tl-xl rounded-xl border flex">
            </div>
      </div>
    </Layout>
  );
}

export default Homepage;