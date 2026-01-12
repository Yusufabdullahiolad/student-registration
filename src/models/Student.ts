import mongoose  from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, required: true},
    Gender: {type: String, required: true}
},{
    timestamps: true
});

export default mongoose.model("Student", studentSchema);