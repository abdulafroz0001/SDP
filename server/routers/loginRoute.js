const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const StudentModel = require("../models/Student");
const FacultyModel = require("../models/Faculty");
const EmployeeModel = require("../models/Employee");
const AdminModel = require("../models/Admin");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
mongoose.connect(process.env.URL,
    { useNewUrlParser: true, }, () => console.log("Connected to DB"));

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isStudent = await StudentModel.findOne({ StudentId: username });
    const isFaculty = await FacultyModel.findOne({ FacultyId: username });
    const isEmployee = await EmployeeModel.findOne({ EmployeeId: username });
    const isAdmin = await AdminModel.findOne({ AdminId: username });
    if (isAdmin && username === isAdmin.AdminId &&
        (password === isAdmin.password)) {
        const userForToken = {
            username: isAdmin.AdminId,
            id: isAdmin._id,
            Fname: isAdmin.Fname,
            Lname: isAdmin.Lname,
            Dob: isAdmin.Dob,
            Gender: isAdmin.Gender,
            Age: isAdmin.Age,
            Phone: isAdmin.Phone,
            Email: isAdmin.Email,
            Address: isAdmin.Address,
            User: isAdmin.User,
        }

        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1m' })
        res.status(200).json({ token });
    }
    else if (isStudent && username === isStudent.StudentId &&
        (password === isStudent.password)) {

        const userForToken = {
            username: isStudent.StudentId,
            id: isStudent._id,
            Fname: isStudent.Fname,
            Lname: isStudent.Lname,
            Dob: isStudent.Dob,
            Gender: isStudent.Gender,
            Age: isStudent.Age,
            Phone: isStudent.Phone,
            Email: isStudent.Email,
            Address: isStudent.Address,
            User: isStudent.User,
        }

        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1m' })
        res.status(200).json({ token });
    }
    else if (isFaculty && username === isFaculty.FacultyId &&
        (password === isFaculty.Dob)) {

        const userForToken = {
            username: isFaculty.FacultyId,
            id: isFaculty._id,
            Fname: isFaculty.Fname,
            Lname: isFaculty.Lname,
            Dob: isFaculty.Dob,
            Gender: isFaculty.Gender,
            Age: isFaculty.Age,
            Phone: isFaculty.Phone,
            Email: isFaculty.Email,
            Address: isFaculty.Address,
            User: isFaculty.User,



        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1m' })

        res.status(200).json({ token });
    }
    else if (isEmployee && username === isEmployee.EmployeeId &&
        await bcrypt.compare(password, isEmployee.password)) {

        const userForToken = {
            username: isEmployee.username,
            id: isEmployee._id,
        }

        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1m' })

        res.status(200).json({ token });
    }
    else {
        return res.status(406).json({
            message: 'Invalid credentials'
        });
    }


})
module.exports = router;