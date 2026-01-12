import express from "express";

import mongoose from "mongoose";
import StudentRoutes from "./routes/studentRoutes";
import fasalRoutes from "./routes/fasalRoutes";
import examRoutes from "./routes/examRoutes";


const  app = express();

app.use(express.json());
// d connect 
mongoose.connect("mongodb://localhost:27017/ahsandb")
.then(()=> console.log("Database is connected"))
.catch((error)=> console.log("db error", error));

app.use("/students", StudentRoutes);
app.use("/fasals", fasalRoutes);
app.use("/exams", examRoutes);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});