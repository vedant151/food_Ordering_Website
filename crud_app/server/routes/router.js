const express = require('express')
const route = express.Router();

// We didn't created the app variable to cause it create the new app thus we can add up the method of the route to several routes
// in different files
const services = require('../services/render')

// Requring the controller module
const controller = require('../controller/controller')

// Making the different router files for routes

route.get('/',services.homeRoutes)

route.get('/add-user', services.add_user)

route.get('/update-user',  services.update_user)

// route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



// Exprting the Module
module.exports = route
