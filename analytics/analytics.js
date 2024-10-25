const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

const rawData = fs.readFileSync(path.resolve(__dirname, 'data.json'));
const data = JSON.parse(rawData);

function isValidDate(dateString) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) !== null;
}

app.get('/grades/:subject', (req, res) => {
  const { subject } = req.params;
  const subjectGrades = data.grades.filter(grade => grade.subject === subject);
  res.json(subjectGrades);
});

app.get('/grades/range/:subject/:startDate/:endDate', (req, res) => {
  const { subject, startDate, endDate } = req.params;

  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return res.status(400).send('Невірний формат дати. Використовуйте формат YYYY-MM-DD.');
  }

  const gradesInRange = data.grades.filter(grade => {
    return grade.subject === subject && grade.date >= startDate && grade.date <= endDate;
  });

  res.json(gradesInRange);
});

app.get('/grades/:subject/:month', (req, res) => {
  const { subject, month } = req.params;
  const monthIndex = parseInt(month) - 1;
  const subjectGradesByMonth = data.grades.filter(grade => {
    const gradeMonth = new Date(grade.date).getMonth();
    return grade.subject === subject && gradeMonth === monthIndex;
  });

  const totalGrades = subjectGradesByMonth.map(grade => grade.grade);
  const averageGrade = totalGrades.reduce((sum, grade) => sum + grade, 0) / totalGrades.length;

  res.json({ subject, month: monthIndex + 1, averageGrade });
});


const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
