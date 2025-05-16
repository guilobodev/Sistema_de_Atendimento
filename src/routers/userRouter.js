import { Router } from "express";
import { createUser, getUsers } from "../controller/userController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser)

export default router;
