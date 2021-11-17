const projectModel = require('../models/ProjectModel');

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.listProjects = async function (req, res, next) {
    projectModel.find().then(async docs => {
        res.send({ docs });
    }).catch(next);
};

exports.getProject = async (req, res, next) => {
    projectModel.findOne({ _id: req.params.id }).then(doc => {
        res.send(doc);
    })
}

exports.insertProject = function (req, res, next) {
    const doc = {
        'name': req.body.name,
        'description': req.body.description
    }

    projectModel.create(doc).then(async function (doc) {
        res.send(doc);
    }).catch(next);
};

exports.updateProject = function (req, res, next) {
    const doc = {
        'name': req.body.name,
        'description': req.body.description
    }

    projectModel.findByIdAndUpdate({ _id: req.params.id }, doc)
        .then(function () {
            projectModel.findOne({ _id: req.params.id }).then(function (doc) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(doc);
            });
        }).catch(next);
};

exports.deleteProject = function (req, res, next) {
    projectModel.findByIdAndRemove({ _id: req.params.id }).then(function (doc) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(doc);
    }).catch(next);
};