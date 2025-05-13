import { Router } from "express";
import { createService, getService } from "../controller/serviceController.js";

const router = Router();

router.get("/service", getService);
router.post("/service", createService)

export default router;
