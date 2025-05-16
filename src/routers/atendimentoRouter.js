import { Router } from "express";
import { CreateAtendimento, deleteAtendimento, getAtendimentos, putAtendimento } from "../controller/atendimentoController.js";
const router = Router();

router.get("/", getAtendimentos);
router.post("/", CreateAtendimento);
router.put("/:id", putAtendimento);
router.delete("/:id", deleteAtendimento);

export default router;