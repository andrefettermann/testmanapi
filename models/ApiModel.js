const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemas
const resultSchema = new Schema({
    status: String,
    who: String,
    when: Date,
    where: String,
    remarks: String
});

const scenariosSchema = new Schema({
    id: String,
    description: String,
    preconditions: [String],
    how: [String],
    result: resultSchema
});

const schema = new Schema({
    name: String,
    description: String,
    testcases: [{
        description: {
            type: String,
            required: [true, '* Campo obrigatório!'],
        },
        scenarios: [scenariosSchema]
    }]
});

const apiModel = mongoose.model('projects', schema);

// exportar modelo
module.exports = apiModel;