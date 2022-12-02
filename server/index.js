const express = require("express");
const loginRoute = require('./routers/loginRoute');
const RegisterRoute = require('./routers/RegisterRoute');
const mongoose = require("mongoose");
const StudentModel = require("./models/Student");
const FacultyModel = require("./models/Faculty");
const EmployeeModel = require("./models/Employee");
const StuAttModel = require("./models/Attend/Attend");
const OtpModel = require("./models/otpVerify/OtpVerify");
const StuAttViewModel= require("./models/Attend/Stuattend");
const app = express();
require('dotenv').config()
app.use(express.json());
app.use(RegisterRoute);
app.use(loginRoute);
mongoose.connect(process.env.URL,
    { useNewUrlParser: true, }, () => console.log("Connected to DB"));
    
    //OTP
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    //--------------------------------------------------------------------------
//     var nodeoutlook = require('nodejs-nodemailer-outlook')
// nodeoutlook.sendEmail({
//     auth: {
//         user: "sender@outlook.com",
//         pass: "********"
//     },
//     from: 'sender@outlook.com',
//     to: 'receiver@gmail.com',
//     subject: 'Hey you, awesome!',
//     html: '<b>This is bold text</b>',
//     text: 'This is text version!',
//     replyTo: 'receiverXXX@gmail.com',
//     attachments: [         ],
//     onError: (e) => console.log(e),
//     onSuccess: (i) => console.log(i)
// }


// );
//-------------------------------------------------------------------------------------


app.get("/admin/getAllstu", async (req, res) => {
    StudentModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.get("/admin/getAllemp", async (req, res) => {
    EmployeeModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.get("/admin/getAllfac", async (req, res) => {
    FacultyModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
// app.get("/stt", async (req, res) => 
// {
//     StudentModel.find(id,(err,result) =>{
//         if(res.json(result))
//             res.json(true);
//         else
//             res.send(false);
        
//     });
//     const fac=FacultyModel.find(id, (err, result) => {
//         if(res.json(result))
//             res.json(true);
//         else
//             res.send(false);
//     });
// });
app.get("/getAtt", async (req, res) => {
    StuAttModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.get("/getAttStu", async (req, res) => {
    StuAttViewModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});
app.listen(process.env.PORT, () => console.log("Server Ready."))