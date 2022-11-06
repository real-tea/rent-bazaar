const express = require('express');
const port = 3001;
const homepage = require('./routes/home.js');
const login = require('./routes/login.js');

const app = express();

app.use('/', homepage);
app.use('/login', login);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})