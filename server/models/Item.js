const mongoose = require('mongoose')
const {Model} = require("mongoose");
const {Schema, model} = mongoose;

const ItemSchema = new Schema({
    modelId: String,
    model: String,
    price: Number,
    image: String,
    quantity: Number,
    supplierId: String,
})

const ItemModel = model('Item', ItemSchema);

module.exports = ItemModel;