// import fs from 'fs';

// export default async function handler(req, res) {
//   const { method, body } = req;

//   if (method === 'GET') {
//     // Read the existing data from the JSON file
//     const data = fs.readFileSync('public/data/task-per.json');
//     const tasks = JSON.parse(data);

//     res.status(200).json(tasks);
//   } else if (method === 'POST') {
//     // Read the existing data from the JSON file
//     const data = fs.readFileSync('public/data/task-per.json');
//     const tasks = JSON.parse(data);

//     // Count the number of tasks in the array and increment the ID of the new task accordingly
//     const newTaskId = tasks.tasks.length + 1;

//     // Add the new task to the array with the auto-incremented ID
//     const newTask = { ...body, id: newTaskId };
//     tasks.tasks.push(newTask);

//     // Write the updated data back to the JSON file
//     fs.writeFileSync('public/data/task-per.json', JSON.stringify(tasks));
//     alert('Task added successfully');
//     res.status(200).json(newTask);
    
//   } else if (method === 'PUT') {
//     // Read the existing data from the JSON file
//     const data = fs.readFileSync('public/data/task-per.json');
//     const tasks = JSON.parse(data);

//     // Find the index of the task to update
//     const index = tasks.tasks.findIndex((task) => task.id === body.id);

//     if (index === -1) {
//       res.status(404).json({ message: 'Task not found' });
//       return;
//     }

//     // Update the task with the new data
//     tasks[index] = { ...body };

//     // Write the updated data back to the JSON file
//     fs.writeFileSync('public/data/task-per.json', JSON.stringify(tasks));

//     res.status(200).json({ success: true });
//   } else if (method === 'DELETE') {
//     // Read the existing data from the JSON file
//     const data = fs.readFileSync('public/data/task-per.json');
//     const tasks = JSON.parse(data);

//     // Find the index of the task to update
//     const index = tasks.tasks.findIndex((task) => task.id === body.id);
//     console.log(index);

//     if (index === -1) {
//       res.status(404).json({ message: 'Task not found' });
//       return;
//     }

//     // Remove the task from the array
//     tasks.tasks.splice(index, 1);

//     // Write the updated data back to the JSON file
//     fs.writeFileSync('public/data/task-per.json', JSON.stringify(tasks));

//     res.status(200).json({ success: true });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

import fs from 'fs';

export default function handler(req, res) {
  const { method, query, body } = req;
  const taskId = query.id;

  switch (method) {
    case 'GET':
      if (taskId) {
        // Đọc một task cụ thể bằng ID
        fs.readFile('./public/data/task-per.json', (err, data) => {
          if (err) throw err;
          const tasks = JSON.parse(data);
          const task = tasks.find((t) => t.id === taskId);
          if (!task) return res.status(404).send('Task not found');
          res.send(task);
        });
      } else {
        // Đọc tất cả các task
        fs.readFile('./public/data/task-per.json', (err, data) => {
          if (err) throw err;
          const tasks = JSON.parse(data);
          res.send(tasks);
        });
      }
      break;

    case 'POST':
      // Tạo một task mới
      fs.readFile('./public/data/task-per.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        // const newTaskID = tasks.length + 1;
        let newTaskId = 1;
        while(tasks.some((task)  => task.id === newTaskId)) {
          newTaskId++;
        }
        const newTask = { id: newTaskId, ...body };
        tasks.push(newTask);
        fs.writeFile('./public/data/task-per.json', JSON.stringify(tasks), (err) => {
          if (err) throw err;
          res.send(newTask);
        });
      });
      break;

    case 'PUT':
      // Cập nhật một task bằng ID
      fs.readFile('./public/data/task-per.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        const taskIndex =tasks.findIndex((task) => task.id == taskId);
        if (taskIndex === -1) return res.status(404).send('Task not found');
        tasks[taskIndex] = { ...tasks[taskIndex], ...body };
        fs.writeFile('./public/data/task-per.json', JSON.stringify(tasks), (err) => {
          if (err) throw err;
          res.send(tasks[taskIndex]);
        });
      });
      break;

      case 'DELETE':
      // Xóa một task bằng ID
      fs.readFile('./public/data/task-per.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex((task) => task.id == taskId);
        if (taskIndex === -1) return res.status(404).send('Task not found');
        tasks.splice(taskIndex, 1);
        fs.writeFile('./public/data/task-per.json', JSON.stringify(tasks), (err) => {
          if (err) throw err;
          res.send('Task deleted successfully');
        });
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
}