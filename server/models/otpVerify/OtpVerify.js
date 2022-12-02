const mongoose = require("mongoose");
const OtpVerifySchema = mongoose.Schema({
    
    Otp: {
        type: Number,
        required: true
    }

});
const OtpVerify = mongoose.model("OtpVerify", OtpVerifySchema);
module.exports = OtpVerify;