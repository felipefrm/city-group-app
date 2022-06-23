const express = require('express');

const GroupController = require('./controllers/GroupController')

const routes = express.Router();

const groupController = new GroupController();

routes.get('/group', groupController.index);
routes.post('/group', groupController.create);
routes.get('/group/:id', groupController.show);
routes.delete('/group/:id', groupController.remove);

module.exports = routes;