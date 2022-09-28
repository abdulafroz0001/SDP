const express = require("express");
const mongoose = require("mongoose");
const StudentModel = require("./models/Student");
const FacultyModel = require("./models/Faculty");
const EmployeeModel = require("./models/Employee");
const StuAttModel = require("./models/Attend/Attend");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://afroz:afroz0001@cluster0.zvdsqgk.mongodb.net/sdp?retryWrites=true&w=majority",
    { useNewUrlParser: true, }, () => console.log("Connected to DB"));
app.get('/gets', (req, res) => res.json(StudData.find()))
app.post("/new", async (req, res) => {
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

        if(user === 'Student'){
        console.log("got a new Student")
        const student = new StudentModel({
            StudentId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user
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
            Address: address, User: user
        });
        try {
            await faculty.save();
            res.send("Inserted Values");
        }

        catch (err) {
            console.log(err);
        }
    }
    else
    {
        console.log("got a new Employee")
        const employee = new EmployeeModel({
            EmployeeId: id, Fname: fname, Lname: lname, Dob: dob,
            Gender: gender, Age: age, Phone: phone, Email: email,
            Address: address, User: user
        });
        try {
            await employee.save();
            res.send("Inserted Values");
        }

        catch (err) {
            console.log(err);
        }
    }
});
app.get("/displayS", async (req, res) => {
    StudentModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.get("/displayF", async (req, res) => {
    FacultyModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.get("/getAtt", async (req, res) => {
    StuAttModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});

// app.put("/upstud", async (req, res) => {
//     const upname = req.body.upName;
//     const id = req.body.id;

//     try {
//         await StudentModel.findById(id, (err, upStudent) => {
//             upStudent.name = upname;
//             upStudent.save();
//             res.json(StudentModel);
//         });
//     }

//     catch (err) {
//         console.log(err);
//     }
// });
// app.delete("/delstud/:id", async (req, res) => {
//     const id = req.params.id;
//     await StudentModel.findByIdAndRemove(id);
// });
app.listen(3005, () => console.log("Server Ready."))