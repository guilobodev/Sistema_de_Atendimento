import { Router } from "express";
import { createCanal, getCanal } from "../controller/canalController.js";

const router = Router();

router.get("/canal", getCanal);
router.post("/canal", createCanal)

export default router;
