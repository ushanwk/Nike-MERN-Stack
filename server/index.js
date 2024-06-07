const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");

const User = require('./models/User')


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ushanwk22:ushanwk22@cluster0.oktfk7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    const userDoc = await User.create({
        name,
        email,
        password
    })
    res.json(userDoc);
})

app.listen(4000)