import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from'./card'
function Pro() {

    let [productes, setproductes] = useState([]);
    // soxion
        useEffect(() => {
           axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c').then(res=>{
            console.log(res.data.results)
               setproductes(res.data.results)
           })
    },[])
  return (
      <div className='container'>
          <div className='row justify-content-evenly mt-3 g-4'>
              
                {productes.map((m, index) => <Card key={index} data={m} />)}
                
          </div>
      </div>
  )
}

export default Pro