const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.get('/tasks', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const data = JSON.parse(rawData);
  res.json(data.tasks);
});


app.get('/tasks/:id', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const data = JSON.parse(rawData);
  const task = data.tasks.find(task => task.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Завдання не знайдено.');
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const data = JSON.parse(rawData);

  const taskIndex = data.tasks.findIndex(task => task.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Завдання не знайдено.');

  data.tasks.splice(taskIndex, 1);

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.json(data.tasks);
});

app.put('/tasks/:id/complete', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const data = JSON.parse(rawData);
  
  const taskIndex = data.tasks.findIndex(task => task.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Завдання не знайдено.');
  

  data.tasks[taskIndex].completed = true;
  
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.json(data.tasks[taskIndex]);
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
