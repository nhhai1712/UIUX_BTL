// import fs from "fs";
// import path from "path";

// const filePath = path.join(process.cwd(), "public/data/team.json");

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const fileData = fs.readFileSync(filePath);
//         const data = JSON.parse(fileData);
//         res.status(200).json(data);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error reading data" });
//       }
//       break;

//     case "POST":
//       try {
//         const { nameTeam, workLocation, privacy, nameMember } = req.body;

//         const fileData = fs.readFileSync(filePath);
//         const data = JSON.parse(fileData);
//         let newTeamId = 1;
//         while(data.some((team)  => team.id === newTeamId)) {
//           newTeamId++;
//         }

//         const newTeam = {
//           id: newTeamId,
//           nameTeam,
//           workLocation,
//           privacy,
//           nameMember,
//         };

//         data.push(newTeam);
//         fs.writeFileSync(filePath, JSON.stringify(data));

//         res.status(201).json(newTeam);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error writing data" });
//       }
//       break;

//     case "PUT":
//       try {
//         const { id, nameTeam, workLocation, privacy, nameMember } = req.body;

//         const fileData = fs.readFileSync(filePath);
//         const data = JSON.parse(fileData);

//         const teamIndex = data.findIndex((team) => team.id === id);

//         if (teamIndex === -1) {
//           res.status(404).json({ message: "Team not found" });
//           return;
//         }

//         const updatedTeam = {
//           ...data[teamIndex],
//           nameTeam,
//           workLocation,
//           privacy,
//           nameMember,
//         };

//         data[teamIndex] = updatedTeam;
//         fs.writeFileSync(filePath, JSON.stringify(data));

//         res.status(200).json(updatedTeam);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error updating data" });
//       }
//       break;

//     case "DELETE":
//       try {
//         const { id } = req.body;

//         const fileData = fs.readFileSync(filePath);
//         const data = JSON.parse(fileData);

//         const teamIndex = data.findIndex((team) => team.id === id);

//         if (teamIndex === -1) {
//           res.status(404).json({ message: "Team not found" });
//           return;
//         }

//         const deletedTeam = data[teamIndex];

//         data.splice(teamIndex, 1);
//         fs.writeFileSync(filePath, JSON.stringify(data));

//         res.status(200).json(deletedTeam);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error deleting data" });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//       res.status(405).json({ message: `Method ${method} not allowed` });
//       break;
//   }
// };

import fs from 'fs';

export default function handler(req, res) {
  const { method, query, body } = req;
  const teamId = query.id;

  switch (method) {
    case 'GET':
      if (teamId) {

        fs.readFile('./public/data/team.json', (err, data) => {
          if (err) throw err;
          const teams = JSON.parse(data);
          const team = teams.find((t) => t.id === teamId);
          if (!team) return res.status(404).send('Team not found');
          res.send(team);
        });
      } else {

        fs.readFile('./public/data/team.json', (err, data) => {
          if (err) throw err;
          const teams = JSON.parse(data);
          res.send(teams);
        });
      }
      break;

    case 'POST':

      fs.readFile('./public/data/team.json', (err, data) => {
        if (err) throw err;
        const teams = JSON.parse(data);
        // console.log(teams);
        let newTeamId = 1;
        while(teams.some((team)  => team.id === newTeamId)) {
          newTeamId++;
        }
        const newTeam = { id: newTeamId, ...body };
        teams.push(newTeam);
        fs.writeFile('./public/data/team.json', JSON.stringify(teams), (err) => {
          if (err) throw err;
          res.send(newTeam);
        });
      });
      break;

    case 'PUT':
      // Cập nhật một task bằng ID
      fs.readFile('./public/data/team.json', (err, data) => {
        if (err) throw err;
        const teams = JSON.parse(data);
        const teamIndex =teams.findIndex((team) => team.id == teamId);
        if (teamIndex === -1) return res.status(404).send('Team not found');
        teams[teamIndex] = { ...teams[teamIndex], ...body };
        fs.writeFile('./public/data/team.json', JSON.stringify(teams), (err) => {
          if (err) throw err;
          res.send(teams[teamIndex]);
        });
      });
      break;

      case 'DELETE':
      // Xóa một task bằng ID
      fs.readFile('./public/data/task-per.json', (err, data) => {
        if (err) throw err;
        const teams = JSON.parse(data);
        const teamIndex = teams.findIndex((team) => team.id == teamId);
        if (teamIndex === -1) return res.status(404).send('team not found');
        teams.splice(teamIndex, 1);
        fs.writeFile('./public/data/team.json', JSON.stringify(teams), (err) => {
          if (err) throw err;
          res.send('Team deleted successfully');
        });
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
}