import mongoose from "mongoose";

export interface IExam extends mongoose.Document {
    name: string;
    sub1: number;
    sub2: number;
    total?: number;
    average?: number;
}

const examSchema = new mongoose.Schema<IExam>({
    name: { type: String, required: true },
    sub1: { type: Number, required: true },
    sub2: { type: Number, required: true },
    total: { type: Number },
    average: { type: Number }
});

export default mongoose.model<IExam>("Exam", examSchema);
