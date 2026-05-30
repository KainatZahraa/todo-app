const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.json({message:'API is running...'})
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5002, () => console.log('Server running on port 5002'));
        console.log('MongoDB connected');
    })
    .catch((err) => console.log(err));







