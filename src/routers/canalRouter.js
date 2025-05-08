import { Router } from "express";
import { getCanal } from "../controller/canalController.js";

const router = Router();

router.get("/canal", getCanal);

export default router;
