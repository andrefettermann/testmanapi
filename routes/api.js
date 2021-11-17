const express = require('express');
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/apiController');

// URLs para a API 
// url para POST será: http://localhost:5000/api/testcase
router.get('/projects', apiController.listProjects);

router.get('/project/:id', apiController.getProject);

//
router.post('/project', apiController.insertProject);

// url para PUT será: http://localhost:5000/api/testcase/:<id_paciente>
router.put('/project/:id', apiController.updateProject);

// url para DELETE será: http://localhost:5000/api/testcase/:<id_paciente>
router.delete('/project/:id', apiController.deleteProject);

module.exports = router;