const express = require('express');
const GroupControllers = require('./controllers/GroupControllers')

const routes = express.Router();

const groupControllers = new GroupControllers();

routes.get('/group', groupControllers.index);
routes.post('/group', groupControllers.create);

routes.get('/group/:id', groupControllers.show);
routes.delete('/group/:id', groupControllers.remove);

module.exports = routes;