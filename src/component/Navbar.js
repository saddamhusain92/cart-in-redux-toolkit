import React from 'react'
import {Link} from 'react-router-dom'
import {BsCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import './Navbar.css'
const Navbar = () => {
  const mycart = useSelector((state)=> state.cart)
  return (
    <>
    <nav className='sd_nav'>
      <div className='logo'>Logo</div>
      <div className='nav_link'>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/about"}>about</Link>
      </div>
      <div className='icon_wrapper'>
        <BsCartFill></BsCartFill>{mycart.length==0?"":<><sup className='icon_cart'><span>{mycart.length}</span></sup></>}
      </div>
    </nav>
    </>
  )
}

export default Navbar