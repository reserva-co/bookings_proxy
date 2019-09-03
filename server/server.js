const express = require('express');

const app = express();
const port = 3005;

app.use('/reservations/:id', express.static('../public/'));

app.listen(port, () => console.log('Listening on port 3005'));