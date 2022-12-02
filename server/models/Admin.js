const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema({
    AdminId: {
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
    },
    password: {
        type: String,
        required: true
    }

});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;