const express = require('express');
const app = express();

const scheduleData = require('./rozklad.json');

app.get('/rozklad', (req, res) => {
  res.json(scheduleData.rozklad); 
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
