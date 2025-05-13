import { Router } from "express";
import { createUser, getUsers } from "../controller/userController.js";

const router = Router();

router.get("/user", getUsers);
router.post("/user", createUser)

export default router;
