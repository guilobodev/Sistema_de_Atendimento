import { Router } from "express";
import { getService } from "../controller/serviceController.js";

const router = Router();

router.get("/service", getService);

export default router;
