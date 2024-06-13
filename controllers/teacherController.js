const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ teacher: req.user.id });
    res.status(200).json({ success: true, data: students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
