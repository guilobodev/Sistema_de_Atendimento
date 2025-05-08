import { Router } from 'express';
import atendimentoRouter from './atendimentoRouter.js'; 
import userRouter from './userRouter.js';
import serviceRouter from './serviceRouter.js';
import canalRouter from './canalRouter.js';

const router = Router();

router.use('/atendimento', atendimentoRouter);
router.use('/user', userRouter);   
router.use('/service', serviceRouter);
router.use('/canal', canalRouter);

export default router;