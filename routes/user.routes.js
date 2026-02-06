//express
const express = require('express');
const router = express.Router();
//import user controller
const { signup, signin } = require('../controllers/User.controllers');
//routes
//POST request -> to create a resource
/*
HTTP Methods
GET -> to read a resource
POST -> to create a resource
PUT -> to update a resource
DELETE -> to delete a resource
*/
//route for signup
router.post('/register', signup);
router.post('/login', signin);
//export the router
module.exports = router;

