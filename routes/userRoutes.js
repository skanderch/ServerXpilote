const express = require('express');
const router = express.Router();
const { registerUser, getUsers, updateUser, deleteUser, loginUser } = require('../controllers/userController');

// User Routes
router.get('/users', getUsers); 
router.post('/users', registerUser);
router.put('/users/:id', updateUser); 
router.delete('/users/:id', deleteUser); 

// Authentication Routes
router.post('/login', loginUser); 

module.exports = router;
