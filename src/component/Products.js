import React,{useEffect,useState} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { useSelector } from 'react-redux/es/exports';
import Product_data from '../data';
const Products = () => {
  const dispatch = useDispatch()

    const[products,setProducts] = useState()
    useEffect(()=>{
      // const fetchparoducts = async ()=>{
      //   const res = await fetch("https://fakestoreapi.com/products")
      //   const data = await res.json()
        setProducts(Product_data);
        
      // }
      // fetchparoducts()
    },[])


const addhandle = (iteam)=>{
  dispatch(add(iteam))
}

  return (
    <div className='container'>
    
        <div className='row iteam_wrapper'>
{products?<>
{
  products.map(iteam=>(
   
    <div className='card col-md-3 m-1' key={iteam.id}>
       <img src={iteam.image} alt="fdfg" />
       <p>Title :{iteam.title}</p>
   <div><button className='btn btn-info m-2' onClick={()=>addhandle(iteam)}>Add to Card</button></div>
   </div>

))
}

</>: <>
<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

</>}
</div>
    </div>
  )
}

export default Products