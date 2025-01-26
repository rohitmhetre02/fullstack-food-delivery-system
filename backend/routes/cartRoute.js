import express from "express";
import { addCart,removeFromCart,getCart } from "../controllers/cartcontroler.js";
 import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.get("/get",authMiddleware,getCart)

export default cartRouter;