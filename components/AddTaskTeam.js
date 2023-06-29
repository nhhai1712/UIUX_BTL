import React, { useState } from "react";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [assign, setAssign] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, such as send it to a backend API

    // Reset the form fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setStatus("");
    setTeam("");
    setAssign("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 mt-6 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
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

        <div>
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

        <div>
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
            <option value="">Select a priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
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
            <option value="">Select a status</option>
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="team" className="block text-gray-700 font-bold mb-2">
            Team:
          </label>
          <select
            id="team"
            name="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a team</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
            <option value="team3">Team 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="assign" className="block text-gray-700 font-bold mb-2">
            Assign:
          </label>
          <select
            id="assign"
            name="assign"
            value={assign}
           onChange={(e) => setAssign(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a person to assign</option>
            <option value="person1">Person 1</option>
            <option value="person2">Person 2</option>
            <option value="person3">Person 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;