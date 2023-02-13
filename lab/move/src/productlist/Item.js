import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from "../Redux/cartSlice"

function Item() {
  let [item,setItem]=useState({});
  const location = useLocation();
  const dispatch = useDispatch();

useEffect(()=>{
  setItem(location.state)
  console.log(location.state)
},[])

function add(){
  dispatch(addToCart(item)); 
}
  return (
    <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images ">
                  <div className="text-center pt-4"> <img id="main-image" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} width={350} /> </div>
                    
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    
                  <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{item.vote_average}</span>
                    <h5 className="text-uppercase">{item.title}</h5>
                    
                    </div>
                  <p className="about">{item.overview}</p>
                   
                  <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" 
                  onClick={add}
                  >Add to cart</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Item


