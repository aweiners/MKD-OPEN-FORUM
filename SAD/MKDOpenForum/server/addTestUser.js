require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Student = require('./models/Student');

async function addTestUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const existingUser = await Student.findOne({ email: 'test@example.com' });
    
    if (existingUser) {
      console.log('Test user already exists!');
      await mongoose.connection.close();
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const newStudent = new Student({
      email: 'test@example.com',
      password: hashedPassword
    });

    await newStudent.save();
    console.log('Test user created successfully!');
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    
  } catch (error) {
    console.error('Error creating test user:', error);
  }
}

addTestUser();