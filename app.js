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
const router = require('./routes/projectRouter.js')
app.use('/api/projects', router);

app.listen('3000', () => {
    console.log('Server started on port 3000');
});