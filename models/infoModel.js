const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('info', infoSchema);