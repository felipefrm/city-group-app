const express = require('express');

const SessionController = require('./controllers/SessionController')
const GroupController = require('./controllers/GroupController');
const CityController = require('./controllers/CityController');

const verifyToken = require('./middlewares/verifyToken');

const routes = express.Router();

const sessionController = new SessionController();
const groupController = new GroupController();
const cityController = new CityController();

routes.post('/login', sessionController.login);
routes.delete('/logout', sessionController.logout);

routes.get('/group', verifyToken, groupController.index);
routes.post('/group', verifyToken, groupController.create);
routes.get('/group/:id', verifyToken, groupController.show);
routes.delete('/group/:id', verifyToken, groupController.remove);

routes.get('/city', verifyToken, cityController.index);

module.exports = routes;