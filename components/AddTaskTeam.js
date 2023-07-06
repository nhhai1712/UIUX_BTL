import React, { useState } from "react";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startdate, setStartDate] = useState(""); 
  const [duedate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("not-started");
  const [workLocation, setWorkLocation] = useState("");
  const [nameTeam, setNameTeam] = useState("");
  const [progress, setProgress] = useState("");
  const [tags, setTags] = useState("team");
  const [assign, setAssign] = useState("Nguyen Hoang Hai");
  const [staff, setStaff] = useState([]);
  const [supporter, setSupporter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      startdate,
      duedate,
      priority,
      status,
      workLocation,
      nameTeam,
      progress,
      tags,
      assign, 
      staff,
      supporter,
    };
    console.log(newTask);
    fetch('/api/addTaskTeam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (response.ok) {
          // Reset the form fields if the write operation was successful
          resetForm();
        } else {
          throw new Error('Failed to add task');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add task');
      });
    resetForm();
  }
  const resetForm = () => {
    // Reset the form fields
    setTitle("");
    setDescription("");
    setStartDate("");
    setDueDate("");
    setPriority("");
    setStatus("");
    setWorkLocation("");
    setNameTeam("");
    setProgress("");
    setTags("");
    setAssign("");
    setStaff([]);
    setSupporter([]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[400px] h-[400px] max-h-500 overflow-y-auto">
      <div className="mb-4 mt-6">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2 ">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-between">
        <div className="mb-4">
          <label htmlFor="startdate" className="block text-gray-700 font-bold mb-2">
            Start Date:
          </label>
          <input
            type="date"
            id="startdate"
            name="startdate"
            value={startdate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duedate" className="block text-gray-700 font-bold mb-2">
            Due Date:
          </label>
          <input
            type="date"
            id="duedate"
            name="duedate"
            value={duedate}
            onChange={(e) => setDueDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="mb-4 w-3/6 mr-1">
          <label htmlFor="priority" className="block text-gray-700 font-bold mb-2">
            Priority:
          </label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="mb-4 w-3/6">
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      

      
      <div className="mb-4">
        <label htmlFor="worklocation" className="block text-gray-700 font-bold mb-2">
          Work Location:
        </label>
        <input 
          type="text" 
          id="worklocation" 
          name="worklocation" 
          value={workLocation} 
          onChange={(e) => setWorkLocation(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="worklocation" className="block text-gray-700 font-bold mb-2">
          Name Team:
        </label>
        <input 
          type="text" 
          id="nameTeam" 
          name="nameTeam" 
          value={nameTeam} 
          onChange={(e) => setNameTeam(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="progress" className="block text-gray-700 font-bold mb-2">
          Progress:
        </label>
        <input 
          type="number" 
          id="progress" 
          name="progress" 
          min="0" max="100" 
          value={progress} 
          onChange={(e) => setProgress(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="worklocation" className="block text-gray-700 font-bold mb-2">
          Assign:
        </label>
        <input 
          type="text" 
          id="assign" 
          name="assign" 
          value={assign} 
          onChange={(e) => setAssign(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="worklocation" className="block text-gray-700 font-bold mb-2">
          Staff:
        </label>
        <input 
          type="text" 
          id="staff" 
          name="staff" 
          value={staff} 
          onChange={(e) => setStaff(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="worklocation" className="block text-gray-700 font-bold mb-2">
          Supporter:
        </label>
        <input 
          type="text" 
          id="supporter" 
          name="supporter" 
          value={supporter} 
          onChange={(e) => setSupporter(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>


      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;