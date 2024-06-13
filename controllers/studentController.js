const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  const { name } = req.body;
  try {
    const student = await Student.create({ name, teacher: req.user.id });
    res.status(201).json({ success: true, data: student });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
