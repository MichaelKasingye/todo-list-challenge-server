import express from "express";
import { addATodos, deleteATodo, getAllTodos, updateATodoStatus } from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getAllTodos);
router.post("/todos", addATodos);
router.delete("/todos/:id", deleteATodo);
router.put("/todos/:id", updateATodoStatus);


export default router;
