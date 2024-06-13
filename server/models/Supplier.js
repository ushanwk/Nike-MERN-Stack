const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const SupplierSchema = new Schema({
    supId: String,
    supName: String,
    supAddress: String,
    supTelephone: Number,
});

const SupplierModel = model('Supplier', SupplierSchema);

module.exports = SupplierModel;