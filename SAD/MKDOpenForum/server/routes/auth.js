const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    return res.json({ success: true, message: 'Login successful!', studentId: student._id });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;