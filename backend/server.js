const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5002, () => console.log('Server running on port 5002'));
        console.log('MongoDB connected');
    })
    .catch((err) => console.log(err));







