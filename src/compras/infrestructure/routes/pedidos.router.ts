import express from  'express';
import { PedidosController } from '../controller/pedidos.controller';

export const router = express.Router();

router.post('/', PedidosController.createPedidos);

export default router;