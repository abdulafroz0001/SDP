const mongoose = require("mongoose");
const StuAttViewSchema = mongoose.Schema({
    Cname: 
    {
        type: String,
        required: true,
    },
    Skill:{
        type:String,
        required:true,
    },
    Tutorial:{
        type:String,
        required:true,
    },
    lecture:{
        type:String,
        required:true,
    },
    practical:{
        type:String,
        required:true,
    }
});
const StuAttend = mongoose.model("StuAttView", StuAttViewSchema);
module.exports = StuAttend;