const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    description: String,
});

const projectModel = mongoose.model('projects', schema);

// exportar modelo
module.exports = projectModel;