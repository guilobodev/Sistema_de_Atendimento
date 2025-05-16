import { Router } from "express";
import { createCanal, getCanal } from "../controller/canalController.js";

const router = Router();

router.get("/", getCanal);
router.post("/", createCanal)

export default router;
