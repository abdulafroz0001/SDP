const mongoose = require("mongoose");
const StuAttSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    por: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },

});
const Attend = mongoose.model("StuAtt", StuAttSchema);
module.exports = Attend;