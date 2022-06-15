import React from 'react'
import { useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux'
import {MdDeleteForever} from 'react-icons/md'
import './Cart.css'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch()
  const mycart = useSelector((state)=> state.cart)
  const de_cart = (item)=>{
    dispatch(remove(item));
  }

  return (
 <>
 <div>
  <h2 className='text-center'>My Cart</h2>
 </div>
<div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{mycart.length} items</div>
                        </div>
                    </div> 
                    {mycart.length>0?<>
                   {mycart.map((item)=>(
                   <div className="row border-top border-bottom">
                   <div className="row main align-items-center">
                       <div className="col-2"><img className="img-fluid" src={item.image}/></div>
                       <div className="col">
                           <div className="row text-muted">Shirt</div>
                           <div className="row">{item.title}</div>
                       </div>
                       <div className="col">
                           <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                       </div>
                       <div className="col">₹ {item.price} <span onClick={()=>de_cart (item)} className="text-danger remove"><MdDeleteForever/></span></div>
                   </div>
               </div>
                   ))}
                    </>:"No Cart your Products !"}
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col"  style={{paddingLeft:"12px"}}>ITEMS {mycart.length}</div>
                        <div className="col text-right">₹ 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- ₹5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">₹ 137.00</div>
                    </div>
                    <button className="btn btn-info">CHECKOUT</button>
                </div>
            </div>
            
        </div>
 
 </>
  )
}

export default Cart