import express from 'express';
import cors from "cors";
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// app config

const app = express();
const PORT = process.env.PORT || 5000;


//middleware
app.use(express.json()); 
app.use(cors())

// db connection
connectDB();


// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('imgs'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/" ,(req,res) => {
    res.send("Hi Rohit Your Project is Good")
})

app.listen(PORT,()=>{
    console.log(`server stated on ${PORT}`)
})


