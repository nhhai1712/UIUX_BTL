import { useEffect, useState } from 'react';

function TaskLoader({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch('data/task-per.json');
      const data = await response.json();
      setTasks(data.tasks);
    }
    fetchTasks();
  }, []);

  return children(tasks);
}

export default TaskLoader;