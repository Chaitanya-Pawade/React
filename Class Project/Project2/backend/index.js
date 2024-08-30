const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const BookingRoute = require('./Routes/BookingRoute');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5000;

app.get('/ping',(req,res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/api', BookingRoute);







app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  