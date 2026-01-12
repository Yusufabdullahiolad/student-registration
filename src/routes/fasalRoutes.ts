import { Request, Response, Router } from "express";

import Fasal from "../models/Class_1";

const router = Router();

router.post("/", async (req: Request, res:Response)=>{
    try{
        const {name, number} = req.body;
        const fasal = await Fasal.create({name, number});
        res.status(201).json(fasal);
    }
    catch{
        res.status(400).json({message: "something went Wrong"});
    }
});

// get

router.get("/", async(req: Request, res: Response)=>{
    const fasals = await Fasal.find();
    res.json(fasals);
});

//put

router.put("/:id", async(req: Request, res:Response)=>{
    try{
   const {id} = req.params;
   const {name, number} = req.body;
   const fasal = await Fasal.findByIdAndUpdate(id, {name, number}, {new: true} );
   res.json(fasal);
    }
    catch{
        res.status(400).json({message: "something went Wrong"});
    }
});

//delete


router.delete("/:id", async(req: Request, res: Response)=>{
    try{
      const {id} =  req.params;
      const fasal1 =  await Fasal.findByIdAndDelete(id);
      res.json(fasal1);
    }
    catch{
        res.status(400).json({message: "something Went Wrong"});
    }
});

export default router;