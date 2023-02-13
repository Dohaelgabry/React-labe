import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeCart } from "../Redux/cartSlice"

function Cart() {

  let cart = useSelector((state) => state.cartReducer.cart)
  console.log(cart)
  const dispatch = useDispatch();
  function Deletcartpro(id){
    dispatch(removeCart(id))
  }
  return (
    <div className='container mt-5'>
      <div className='row justify-content-start mt-3 g-4'>
        {cart.map((item, index) => <div key={index} className="card p-3 col-3 me-5 " style={{ width: "18rem" }}>
          <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
          </div>
          <p className="about">{item.overview.length > 80 ? item.overview.substring(0, 80).concat("...more") : item.overview}</p>

          <button className="btn btn-primary" onClick={() => Deletcartpro(item.id)}>remove Cart</button>
        </div>)}
      </div>
      
    </div>
  
  )
}

export default Cart