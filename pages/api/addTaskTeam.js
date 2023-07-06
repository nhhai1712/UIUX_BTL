import fs from 'fs';

export default function handler(req, res) {
  const { method, query, body } = req;
  const taskId = query.id;

  switch (method) {
    case 'GET':
      if (taskId) {
        // Đọc một task cụ thể bằng ID
        fs.readFile('./public/data/task-team.json', (err, data) => {
          if (err) throw err;
          const tasks = JSON.parse(data);
          const task = tasks.find((t) => t.id === taskId);
          if (!task) return res.status(404).send('Task not found');
          res.send(task);
        });
      } else {
        // Đọc tất cả các task
        fs.readFile('./public/data/task-team.json', (err, data) => {
          if (err) throw err;
          const tasks = JSON.parse(data);
          res.send(tasks);
        });
      }
      break;

    case 'POST':
      // Tạo một task mới
      fs.readFile('./public/data/task-team.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        // const newTaskID = tasks.length + 1;
        let newTaskId = 1;
        while(tasks.some((task)  => task.id === newTaskId)) {
          newTaskId++;
        }
        const newTask = { id: newTaskId, ...body };
        tasks.push(newTask);
        fs.writeFile('./public/data/task-team.json', JSON.stringify(tasks), (err) => {
          if (err) throw err;
          res.send(newTask);
        });
      });
      break;

    case 'PUT':
      // Cập nhật một task bằng ID
      fs.readFile('./public/data/task-team.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        const taskIndex =tasks.findIndex((task) => task.id == taskId);
        if (taskIndex === -1) return res.status(404).send('Task not found');
        tasks[taskIndex] = { ...tasks[taskIndex], ...body };
        fs.writeFile('./public/data/task-team.json', JSON.stringify(tasks), (err) => {
          if (err) throw err;
          res.send(tasks[taskIndex]);
        });
      });
      break;

      case 'DELETE':
      // Xóa một task bằng ID
      fs.readFile('./public/data/task-team.json', (err, data) => {
        if (err) throw err;
        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex((task) => task.id == taskId);
        if (taskIndex === -1) return res.status(404).send('Task not found');
        tasks.splice(taskIndex, 1);
        fs.writeFile('./public/data/task-team.json', JSON.stringify(tasks), (err) => {
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