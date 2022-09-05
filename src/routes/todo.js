import express from "express";
import { addATodos, deleteATodo, getAllTodos } from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", getAllTodos);
router.post("/todos", addATodos);
router.delete("/todos/:id", deleteATodo);


export default router;
