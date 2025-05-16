import { Router } from "express";
import { createService, getService } from "../controller/serviceController.js";

const router = Router();

router.get("/", getService);
router.post("/", createService)

export default router;
