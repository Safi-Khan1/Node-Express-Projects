const express = require('express');
const { createStudent } = require('../controllers/studentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createStudent);

module.exports = router;
