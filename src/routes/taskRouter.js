import express from "express";

const router = express.Router();

import taskController from "../controllers/taskController.js";
import methodNotAllowed from "../utils/methodNotAllowed.js";

router.get("/", taskController.getAllTask).all(methodNotAllowed);
router.post("/", taskController.createTask).all(methodNotAllowed);
router.patch("/edit/:id", taskController.editTask).all(methodNotAllowed);
router.delete("/:id", taskController.deleteTask).all(methodNotAllowed);
router.get("/getEach/id:", taskController.eachTask).all(methodNotAllowed);

export default router;
