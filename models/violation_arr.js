import  mongoose  from "mongoose";

const violationArrType = mongoose.Schema({
    violation_type:String, 
    val:{violation:String}
})


const ViolationArrMessage = mongoose.model('ViolationArrMessage',violationArrType)

export default ViolationArrMessage