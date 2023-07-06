// import { useEffect, useState } from 'react';
// import FilterButton from '@/components/FilterButton';
// export default function KanbanBoard() {
//   const [tasks, setTasks] = useState([]);
//   const [filterValue, setFilterValue] = useState(null);

//   useEffect(() => {
//     async function fetchTasks() {
//       const response = await fetch('data/task-per.json');
//       const data = await response.json();
//       setTasks(data.tasks);
//     }
//     fetchTasks();
//   }, []);

//   function handleDragStart(event, task) {
//     event.dataTransfer.setData('task', JSON.stringify(task));
//   }

//   function handleDragOver(event) {
//     event.preventDefault();
//   }

//   function handleDrop(event, status) {
//     const task = JSON.parse(event.dataTransfer.getData('task'));
//     const newTasks = tasks.filter((t) => t.id !== task.id);
//     task.status = status;
//     newTasks.push(task);
//     setTasks(newTasks);
//   }

//   function handleFilterSelect(value){
//     setFilterValue(value);
//   }

//   const filteredTasks = filterValue ? tasks.filter((task) => task.priority === filterValue) : tasks;
//   const [selectedTask, setSelectedTask] = useState(null);
//   // const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   return (
//     // <div className="relative">
//     //   <div className="flex justify-center mb-4">
//     //     <FilterButton values={['not-started', 'in-progress', 'completed']} onSelect={handleFilterSelect} />
//     //   </div>
//     //   <div className="flex"></div>
//     // </div>
//     <div className='relative flex'>
//         <div
//             style={{ width: '33.33%', padding: '8px' }}
//             onDragOver={handleDragOver}
//             onDrop={(event) => handleDrop(event, 'completed')}
//             className="bg-green-100 mr-4">
//             <div>
//                 <b>Completed</b>
//             </div>
//             <div className="bg-green-300 p-1 rounded-md">
//                 {tasks.filter((task) => task.status === 'completed').map((task) => (
//                 <div
//                   key={task.id}
//                   draggable
//                   onDragStart={(event) => handleDragStart(event, task)}
//                   onClick={() => handleTaskClick(task)}
//                   className="rounded-md"
//                   style={{
//                       padding: '8px',
//                       margin: '4px',
//                       minHeight: '50px',
//                       backgroundColor: 'rgb(241 245 249)',
//                       cursor: 'pointer',
//                   }}>
//                 <h3>{task.title}</h3>
//                 <h3>{task.priority}</h3>
{/* <h3>{task.startdate}</h3> */}
//                 <h3>{task.duedate}</h3>
//                 </div>
//               ))}
//             </div>
//             {selectedTask && (
//               <div className="popup-task">
//                 <div className="popup-task-content">
//                   <h2>{selectedTask.title}</h2>
//                   <p>{selectedTask.description}</p>
//                   <button onClick={() => setSelectedTask(null)}>Close</button>
//                 </div>
//               </div>
//             )} 
//         </div>
//         <div
//             style={{ width: '33.33%', padding: '8px' }}
//             onDragOver={handleDragOver}
//             onDrop={(event) => handleDrop(event, 'in-progress')}
//             className="bg-blue-100 mr-4">
//             <div>
//                 <b>In Progress</b>
//             </div>
//             <div className="bg-blue-300 p-1 rounded-md">
//                 {tasks.filter((task) => task.status === 'in-progress').map((task) => (
//                 <div
//                 key={task.id}
//                 draggable
//                 onDragStart={(event) => handleDragStart(event, task)}
//                 onClick={() => handleTaskClick(task)}
//                 className="rounded-md"
//                 style={{
//                     padding: '8px',
//                     margin: '4px',
//                     minHeight: '50px',
//                     backgroundColor: 'rgb(241 245 249)',
//                     cursor: 'pointer',
//                 }}
//                 >
//                 <h3>{task.title}</h3>
//                 <h3>{task.priority}</h3>
{/* <h3>{task.startdate}</h3> */}
//                 <h3>{task.duedate}</h3>
//                 </div>
//             ))}
//             </div>
//             {selectedTask && (
//               <div className="popup-task">
//                 <div className="popup-task-content">
//                   <h2>{selectedTask.title}</h2>
//                   <p>{selectedTask.description}</p>
//                   <button onClick={() => setSelectedTask(null)}>Close</button>
//                 </div>
//               </div>
//             )}
//         </div>
//         <div 
//             style={{ width: '33.33%', padding: '8px' }}
//             onDragOver={handleDragOver}
//             onDrop={(event) => handleDrop(event, 'not-started')}
//             className="bg-orange-100">
//             <div>
//                 <b>Not Started</b>
//             </div>
//             <div className="bg-orange-300 p-1 rounded-md">
//                 {tasks.filter((task) => task.status === 'not-started').map((task) => (
//                 <div
//                 key={task.id}
//                 draggable
//                 onDragStart={(event) => handleDragStart(event, task)}
//                 onClick={() => handleTaskClick(task)}
//                 className="rounded-md"
//                 style={{
//                     padding: '8px',
//                     margin: '4px',
//                     minHeight: '50px',
//                     backgroundColor: 'rgb(241 245 249)',
//                     cursor: 'pointer',
//                 }}
//                 >
//                 <h3>{task.title}</h3>
//                 <h3>{task.priority}</h3>
{/* <h3>{task.startdate}</h3> */}
//                 <h3>{task.duedate}</h3>
//                 </div>
//             ))}
//             </div>
//             {selectedTask && (
//               <div className="popup-task">
//                 <div className="popup-task-content">
//                   <h3><b>Title: </b>{selectedTask.title}</h3>
//                   <h3><b>Description: </b>{selectedTask.description}</h3>
//                   <h3><b>Duedate: </b>{selectedTask.duedate}</h3>
//                   <h3><b>Priority: </b>{selectedTask.priority}</h3>
//                   <h3><b>Status: </b>{selectedTask.status}</h3>
//                   <h3><b>Tags: </b>{selectedTask.tags}</h3>
//                   <div className="ml-24 mt-6">
//                     <button onClick={() => setSelectedTask(null)}>Close</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//         </div> 
//     </div>
//   );
// }


 {/* <h2><b>Title:</b> {selectedTask.title}</h2>
              <p>Description: {selectedTask.description}</p>
              <p>Priority: {selectedTask.priority}</p>
              <p>Status: {selectedTask.status}</p>
              <p>Work Location: {selectedTask.work_location}</p>
              <p>Tags: {selectedTask.tags}</p>
              <p>Date: {selectedTask.startdate} - {selectedTask.duedate}</p> */}



              