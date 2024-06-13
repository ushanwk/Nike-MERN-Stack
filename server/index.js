const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const app = express();

const User = require('./models/User');
const Item = require('./models/Item');
const Supplier = require('./models/Supplier');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'});
const fs = require('fs')

const salt = bcrypt.genSaltSync(10);
const secret = 'gjnjonfonodfnndfokn';

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));

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

app.post('/item', uploadMiddleware.single('file'), async (req, res) => {
    const{originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath);

    const{modelId, model, unitPrice, quantity, supplierId} = req.body;
    const price = Number(unitPrice);
    const qty = Number(quantity);

    const itemDoc = await Item.create({
        modelId,
        model,
        price: price,
        image: newPath,
        quantity: qty,
        supplierId,
    })

    res.json(itemDoc);
})

app.get('/item', async(req, res) => {
    const items = await Item.find();
    res.json(items);
})

app.get('/customer', async(req, res) => {
    const customers = await User.find();
    res.json(customers);
})

app.post('/supplier', async (req, res) => {
    const {supId, supName, supAdd, supTel} = req.body;

    const telephone = Number(supTel);

    const supDoc = await Supplier.create({
        supId: supId,
        supName: supName,
        supAddress: supAdd,
        supTelephone: telephone
    });

    res.json(supDoc);

});

app.get('/supplier', async (req, res) => {
    const suppliers = await Supplier.find();
    res.json(suppliers);
})

app.listen(4000)