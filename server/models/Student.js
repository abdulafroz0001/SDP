const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    StudentId: {
        type: String,
        required: true
    },
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Dob: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    }

});
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;