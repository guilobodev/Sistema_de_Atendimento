import { Router } from "express";
import { getUsers } from "../controller/userController.js";

const router = Router();

router.get("/user", getUsers);

export default router;
