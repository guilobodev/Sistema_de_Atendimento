import { Router } from "express";
import { CreateAtendimento, deleteAtendimento, getAtendimentos, putAtendimento } from "../controller/atendimentoController.js";
const router = Router();

router.get("/atendimento", getAtendimentos);
router.post("/atendimento", CreateAtendimento);
router.put("/atendimento/:id", putAtendimento);
router.delete("/atendimento/:id", deleteAtendimento);

export default router;