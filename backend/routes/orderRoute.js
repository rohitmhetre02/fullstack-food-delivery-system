import express from 'express';
import authiMiddlewarre from "../middleware/auth.js";
import { listOrders, placeOrder, updateOrderStatus, userOrder, verifyOrder } from '../controllers/ordercontroler.js';

const orderRouter = express.Router();

orderRouter.post("/place",authiMiddlewarre,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authiMiddlewarre,userOrder)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateOrderStatus)


export default orderRouter;