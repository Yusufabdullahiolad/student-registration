import { Router, Request, Response } from "express";
import Exam from "../models/Exam";

const router = Router();

// POST - create exam
router.post("/", async (req: Request, res: Response) => {
    try {
        const { name, sub1, sub2 } = req.body;

        if (typeof sub1 !== "number" || typeof sub2 !== "number") {
            return res.status(400).json({ message: "sub1 and sub2 must be numbers" });
        }

        const total = sub1 + sub2;
        const average = total / 2;

        const exam = await Exam.create({ name, sub1, sub2, total, average });

        res.status(201).json(exam);
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
});

// GET - all exams
router.get("/", async (req: Request, res: Response) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: "Error fetching exams", error });
    }
});

// PUT - update exam
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, sub1, sub2 } = req.body;

        if (typeof sub1 !== "number" || typeof sub2 !== "number") {
            return res.status(400).json({ message: "sub1 and sub2 must be numbers" });
        }

        const total = sub1 + sub2;
        const average = total / 2;

        const exam = await Exam.findByIdAndUpdate(
            id,
            { name, sub1, sub2, total, average },
            { new: true }
        );

        if (!exam) return res.status(404).json({ message: "Exam not found" });

        res.status(200).json(exam);
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
});

export default router;
