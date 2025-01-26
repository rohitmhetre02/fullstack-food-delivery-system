import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                 <div className='card-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>&#8377;{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>&#8377;{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr></hr>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
         <h2>Cart Totals</h2>
         <div>
          <div className="cart-total-details">
          <p>Subtotal</p>
          <p>&#8377;{getTotalCartAmount()}</p>
          </div>
          <hr></hr>
          <div className="cart-total-details">
             <p>Delivery Fee</p>
             <p>&#8377;{getTotalCartAmount()===0?0:25}</p>
          </div>
          <hr></hr>
          <div className="cart-total-details">
           <b>Total</b>
           <b>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+25}</b>
          </div>
         </div>
         <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;