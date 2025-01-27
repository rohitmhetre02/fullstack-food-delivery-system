import usermodel from "../models/userModel.js";
import bodyParser from "body-parser";
const { json } = bodyParser;


// add item user cart
const addCart = async(req,res) =>{
  try{
     let userData = await usermodel.findById(req.body.userId);
     let cartData = await userData.cartData;
     if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1
     }
     else{
        cartData[req.body.itemId] +=1;
     }
     await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,mesage:"Added to cart"})
  } catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}


// remove items from user cart
const removeFromCart = async (req,res)  => {
    try{
      let userData =await usermodel.findById(req.body.userId);
       let cartData = await userData.cartData;
       if(cartData[req.body.itemId]>0){
          cartData[req.body.itemId] -=1
       }
       await usermodel.findByIdAndUpdate(req.body.userId,{cartData})
       res.json({success:true,message:"Removed from cart"})
    } catch (error){
      console.log(error);
      res.json({success:false,message:"error"})
    }
}

// fetchuser cart data
const getCart = async(req,res) => {
    try{
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch{
      console.log(error)
      res.json({success:false,message:"Error"})
    }
}

export {addCart,removeFromCart,getCart};