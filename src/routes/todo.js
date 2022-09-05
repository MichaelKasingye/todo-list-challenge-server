import express from "express";
import { addATodos, getAllTodos } from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getAllTodos);
router.post("/todos", addATodos);


export default router;
