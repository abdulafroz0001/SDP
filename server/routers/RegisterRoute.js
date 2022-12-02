const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const StudentModel = require("../models/Student");
const FacultyModel = require("../models/Faculty");
const EmployeeModel = require("../models/Employee");
const AdminModel = require("../models/Admin");
require('dotenv').config()
mongoose.connect(process.env.URL,
    { useNewUrlParser: true, }, () => console.log("Connected to DB"));


router.post("/register", async (req, res) => 
{
    console.log("got a new Student")
    const fname = req.body.fname;
    const lname = req.body.lname;
    const id = req.body.idnum;
    const age = req.body.age;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const user = req.body.user; 
    const password= req.body.dob;

        if(user === 'Student'){
        console.log("got a new Student")
        const student = new StudentModel({
            StudentId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user,password:password
        });
        try {
            await student.save();
            res.send("Inserted Values");
        }

        catch (err) {
            console.log(err);
        }
    }
    else if(user === 'Faculty')
    {
        console.log("got a new Faculty")
        const faculty = new FacultyModel({
            FacultyId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user,password:password
        });
        try {
            await faculty.save();
            res.send("Inserted Values");
        }

        catch (err) {
            console.log(err);
        }
    }
    else if(user === 'Employee')
    {
        console.log("got a new Employee")
        const employee = new EmployeeModel({
            EmployeeId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user,password:password
        });
        try {
            await employee.save();
            res.send("Inserted Values");
        }

        catch (err) {
            console.log(err);
        }
    }
    else
    {
        console.log("got a new Admin")
        const admin = new AdminModel({
            AdminId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user,password:password
        });
        try {
            await admin.save();
            res.send("Inserted Values");
        }
        catch (err) {
            console.log(err);
        }
    }
});
module.exports = router;