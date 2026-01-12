import {Router, Request, Response} from 'express';

import Student  from '../models/Student';

const router = Router();

// post

router.post('/', async (req: Request, res: Response)=>{
    try{
        const {name, age, Gender} = req.body;
        const student = await Student.create({name, age, Gender});
        res.status(201).json(student);
    }catch(error){
        res.status(400).json({message: "something Went wrong"});
    }
});

// get
router.get("/", async(req: Request, res: Response)=>{
    const Students = await Student.find();
    res.json(Students);
});

//put

router.put("/:id", async(req: Request, res: Response)=>{
    const{id} = req.params;
    const {name, age, Gender} = req.body;
    const student = await Student.findByIdAndUpdate(id, 
        {
            name,
            age,
            Gender
        },
     {new: true}
    );

    if(!student) return res.json({message: "Student Not found"});
    res.json(student);

});

// delete

router.delete("/:id", async (req: Request, res:Response)=>{
   const {id} = req.params;
    const student = await Student.findByIdAndDelete(id);
    if(!student) return res.status(404).json({message: "Student Not found "});
    res.json({message: "Student Deleted"});


})

export default router;
