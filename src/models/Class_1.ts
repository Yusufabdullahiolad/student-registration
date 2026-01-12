import mongoose from "mongoose";

const class1Schema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: String, required: true}
}, 
{
    timestamps: true
});

export default mongoose.model("Class_1", class1Schema);