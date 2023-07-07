import React, { useState, useEffect } from 'react';
import FilterButtonTeam from './FilterButtonTeam';
import AddTask from  "@/components/AddTask";
import SearchBar from '@/components/SearchBar';
import AddTeam from '@/components/AddTeam';
export default function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filters, setFilters] = useState({});
  const [editedTask, setEditedTask] = useState();
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedNameTeam, setSelectedNameTeam] = useState('');
  const [selectedWorkLocation, setSelectedWorkLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('data/task-team.json');
      const tasks = await response.json();
      // console.log(tasks);
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  function handleDragStart(event, task) {
    event.dataTransfer.setData('task', JSON.stringify(task));
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  async function handleDrop(event, status) {
    const task = JSON.parse(event.dataTransfer.getData('task'));
    const newTasks = tasks.filter((t) => t.id !== task.id);
    task.status = status;
    const response = await fetch(`/api/addTask?id=${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      console.error(
        `Failed to update task ${task.id}: ${response.statusText}`
      );
    }
    newTasks.push(task);
    setTasks(newTasks);
  }

  function handleFilterSelect(type, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  function handleTaskClick(task) {
    setSelectedTask(task);
    setEditedTask({ ...task });
  }
  const handleSaveClick = async () => {
    setSelectedTask(editedTask);
    const taskIndex = tasks.findIndex((t) => t.id === editedTask.id);
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = editedTask;

    setTasks(updatedTasks);
    const response = await fetch(`/api/addTask?id=${editedTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTask),
    });
    if (!response.ok) {
      console.error(
        `Failed to update task ${editedTask.id}: ${response.statusText}`
      );
    }
    setEditedTask(null);
  };
  const handleCancelClick = () => {
    setEditedTask(null);
  };

  async function handleDelete(taskId) {
    try {
      const response = await fetch(`/api/addTask?id=${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error(`Failed to delete task ${taskId}: ${error.message}`);
        return;
      }
  
      setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
      setSelectedTask(null);
    } catch (error) {
      console.error(`Failed to delete task ${taskId}: ${error.message}`);
    }
  }
  function handleFilterChange({ selectedPriority, selectedStatus, selectedNameTeam, selectedWorkLocation }) {
    setSelectedPriority(selectedPriority);
    setSelectedStatus(selectedStatus);
    setSelectedNameTeam(selectedNameTeam);
    setSelectedWorkLocation(selectedWorkLocation)
  }
  function handleSearchTermChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectedPriority && task.priority !== selectedPriority) {
      return false;
    }
    if (selectedStatus && task.status !== selectedStatus) {
      return false;
    }
    if (selectedNameTeam && task.nameTeam !== selectedNameTeam) {
      return false;
    }
    if (searchTerm 
      && !task.title.toLowerCase().includes(searchTerm.toLowerCase()) 
      && !task.description.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.priority.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.status.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.workLocation.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.progress.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.startdate.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.duedate.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.tags.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.nameTeam.toLowerCase().includes(searchTerm.toLowerCase())
      && !task.assign.toLowerCase().includes(searchTerm.toLowerCase())
    //   && !task.staff.some((staffMember) => staffMember.toLowerCase().includes(searchTerm.toLowerCase()))
    //   && !task.supporter.some((supporterMember) => supporterMember.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
      return false;
    }
    return true;
    });
  return ( 
    <div>
    <div className='relative'>
        <div className='flex justify-end mb-4'>
        <SearchBar searchTerm={searchTerm} onChange={handleSearchTermChange} />
        <FilterButtonTeam
        selectedPriority={selectedPriority}
        selectedStatus={selectedStatus}
        selectedNameTeam={selectedNameTeam}
        onNameTeamChange={setSelectedNameTeam} 
        onChange={handleFilterChange}
      />
        <AddTeam/>
        <AddTask/>
      </div>
      <div className='flex'>
        <div
          style={{ width: '33.33%', padding: '8px' }}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'completed')}
          className='bg-green-100 mr-4'
        >
          <div className='mb-2 text-center'>
            <b>Completed</b>
          </div>
          <div className='bg-green-300 p-1 rounded-md'>
            {filteredTasks.filter((task) => task.status === 'completed').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => handleDragStart(event, task)}
                onClick={() => handleTaskClick(task)}
                className='rounded-md'
                style={{
                  padding: '8px',
                  margin: '4px',
                  minHeight: '50px',
                  backgroundColor: 'rgb(241 245 249)',
                  cursor: 'pointer',
                }}
              >
                <b>{task.title}</b>
                <p>{task.description}</p>
                <div className='flex'>
                  <div className='border-black border-2 bg-lime-200 rounded-md text-center w-24 mr-2'>
                    <h3>{task.workLocation}</h3>
                  </div>
                  <div className={task.priority}>
                    <h3>{task.priority}</h3>
                  </div>
                </div>
                <h3>{task.startdate} - {task.duedate}</h3>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ width: '33.33%', padding: '8px' }}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'in-progress')}
          className='bg-yellow-100 mr-4'
        >
          <div className='mb-2 text-center'>
            <b>In Progress</b>
          </div>
          <div className='bg-yellow-300 p-1 rounded-md'>
            {filteredTasks.filter((task) => task.status === 'in-progress').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => handleDragStart(event, task)}
                onClick={() => handleTaskClick(task)}
                className='rounded-md'
                style={{
                  padding: '8px',
                  margin: '4px',
                  minHeight: '50px',
                  backgroundColor: 'rgb(241 245 249)',
                  cursor: 'pointer',
                }}
              >
                <b>{task.title}</b>
                <p>{task.description}</p>
                <div className='flex'>
                  <div className='border-black border-2 bg-lime-200 rounded-md text-center w-24 mr-2'>
                    <h3>{task.workLocation}</h3>
                  </div>
                  <div className={task.priority}>
                    <h3>{task.priority}</h3>
                  </div>
                </div>
                <h3>{task.startdate} - {task.duedate}</h3>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ width: '33.33%', padding: '8px' }}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'not-started')}
          className='bg-red-100'
        >
          <div className='mb-2 text-center'>
            <b>Not Started</b>
          </div>
          <div className='bg-red-300 p-1 rounded-md'>
            {filteredTasks.filter((task) => task.status === 'not-started').map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(event) => handleDragStart(event, task)}
                onClick={() => handleTaskClick(task)}
                className='rounded-md'
                style={{
                  padding: '8px',
                  margin: '4px',
                  minHeight: '50px',
                  backgroundColor: 'rgb(241 245 249)',
                  cursor: 'pointer',
                }}
              >
                <b>{task.title}</b>
                <p>{task.description}</p>
                <div className='flex'>
                  <div className='border-black border-2 bg-lime-200 rounded-md text-center w-24 mr-2'>
                    <h3>{task.workLocation}</h3>
                  </div>
                  <div className={task.priority}>
                    <h3>{task.priority}</h3>
                  </div>
                </div>
                <h3>{task.startdate} - {task.duedate}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedTask && (
        <div
          className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'
          onClick={() => setSelectedTask(null)}
        >
          <div
            className='bg-white p-4 rounded-md'
            onClick={(event) => event.stopPropagation()}
          > 
           
            <div className="w-[400px] h-[600px] max-h-500 overflow-y-auto">
              <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                Task Detail
              </p>
              <div className="mt-2 mb-2 border-b-2 border-gray-500"></div>
              <div className="mb-4">
                <label className="font-bold mr-2">Title:</label>
                  {editedTask ? (
                    <input
                      type="text"
                      name="title"
                      value={editedTask.title}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.title}</span>
                  )}
              </div>

              <div className="mb-4 flex">
                <label className="font-bold mr-2">Description:</label>
                  {editedTask ? (
                    <textarea
                      name="description"
                      value={editedTask.description}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.description}</span>
                  )}
              </div>
            {/* <div className='flex justify-between'> */}
              <div className="mb-4">
                <label className="font-bold mr-2">Start Date:</label>
                  {editedTask ? (
                    <input
                      type="date"
                      name="startdate"
                      value={editedTask.startdate}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.startdate}</span>
                  )}
              </div>

              <div className="mb-4">
                <label className="font-bold mr-2">Due Date:</label>
                  {editedTask ? (
                    <input
                      type="date"
                      name="duedate"
                      value={editedTask.duedate}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.duedate}</span>
                  )}
              </div>
            {/* </div> */}
            {/* <div className='flex justify-between'> */}
              <div className="mb-4">
                <label className="font-bold mr-2">Priority:</label>
                  {editedTask ? (
                    <select
                      name="priority"
                      value={editedTask.priority}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  ) : (
                    <span>{selectedTask.priority}</span>
                  )}
              </div>

              <div className="mb-4 mr-4">
                <label className="font-bold mr-2">Status:</label>
                  {editedTask ? (
                    <select
                      name="status"
                      value={editedTask.status}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  ) : (
                    <span>{selectedTask.status}</span>
                  )}
              {/* </div> */}
            </div>

            {/* <div className='flex justify-between'>  */}
              <div className="mb-4">
                <label className="font-bold mr-2">Work Location:</label>
                  {editedTask ? (
                    <input
                      type="text"
                      name="workLocation"
                      value={editedTask.workLocation}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.workLocation}</span>
                  )}
              </div>

              <div className="mb-4">
                <label className="font-bold mr-2">Name Team:</label>
                  {editedTask ? (
                    <input
                      type="text"
                      name="nameTeam"
                      value={editedTask.nameTeam}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.nameTeam}</span>
                  )}
              </div>
            {/* </div> */}
            {/* <div className='flex justify-between'> */}
              <div className="mb-4">
                <label className="font-bold mr-2">Progress:</label>
                  {editedTask ? (
                    <input
                      type="number"
                      name="progress"
                      min="0"
                      max="100"
                      value={editedTask.progress}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.progress}</span>
                  )}
              </div>

              <div className="mb-4">
                <label className="font-bold mr-2">Tags:</label>
                  {editedTask ? (
                    <input
                      type="text"
                      name="tags"
                      value={editedTask.tags}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    <span>{selectedTask.tags}</span>
                  )}
              </div>
            {/* </div> */}
                <div className="mb-4">
                <label className="font-bold mr-2">Assign:</label>
                  {editedTask ? (
                    <select
                      name="assign"
                      value={editedTask.assign}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="nguyenhoanghai">Nguyen Hoang Hai</option>
                      <option value="kieudoantrung">Kieu Doan Trung</option>
                      <option value="nguyenhuutien">Nguyen Huu Tien</option>
                    </select>
                  ) : (
                    <span>{selectedTask.assign}</span>
                  )}
              </div>

              <div className="mb-4">
                <label className="font-bold mr-2">Staff:</label>
                  {editedTask ? (
                    <input
                      name="staff"
                      value={editedTask.staff}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    >
                    </input>
                  ) : (
                    <span>{selectedTask.staff}</span>
                  )}
              </div>

              <div className="mb-4">
                <label className="font-bold mr-2">Supporter:</label>
                  {editedTask ? (
                    <input
                      name="supporter"
                      value={editedTask.supporter}
                      onChange={handleInputChange}
                      className="border rounded-md px-2 py-1"
                    >
                    </input>
                  ) : (
                    <span>{selectedTask.supporter} </span>
                  )}
              </div>
                    
              {editedTask ? (
              <div className="flex justify-end">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleSaveClick}
                  // onClick={() => handleUpdate(editedTask)}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setEditedTask({ ...selectedTask })}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2"
                  onClick={() => handleDelete(selectedTask.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md ml-2"
                  onClick={() => setSelectedTask(null)}
                >
                  Close
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}