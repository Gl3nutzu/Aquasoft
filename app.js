const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// routers
const projectRouter = require('./routes/projectRouter');
app.use('/api/projects', projectRouter);

const interviewRouter = require('./routes/interviewRouter.js');
app.use('/api/interviews', interviewRouter);

const candidateRouter = require('./routes/candidateRouter.js');
app.use('/api/candidates', candidateRouter);

app.listen('3000', () => {
    console.log('Server started on port 3000');
});