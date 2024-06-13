const express = require('express');
const { getStudents } = require('../controllers/teacherController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/students', protect, getStudents);

module.exports = router;
