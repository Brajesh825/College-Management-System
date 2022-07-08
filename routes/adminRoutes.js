const express = require('express');
const router = express.Router();

const AdminController = require("../controllers/adminControllers")
const adminController = new AdminController()
// Admin Login
router.post('/login',adminController.postLogin)

module.exports = router;