const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const app = express();
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'gjnjonfonodfnndfokn';

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://ushanwk22:ushanwk22@cluster0.oktfk7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try{
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, salt)
        })

        res.json(userDoc);
    }catch (e){
        res.status(400).json(e)
    }

});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if(passOk){
        jwt.sign({email, id: userDoc._id}, secret, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json('ok');
        })
    }else{
        res.status(400).json('Wrong Credentials...');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    })
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.listen(4000)