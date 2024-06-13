const Teacher = require('../models/Teacher');
const jwt = require('jsonwebtoken');

exports.registerTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const teacher = await Teacher.create({ name, email, password });
    res.status(201).json({
      success: true,
      data: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.loginTeacher = async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher || !(await teacher.matchPassword(password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: teacher._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
