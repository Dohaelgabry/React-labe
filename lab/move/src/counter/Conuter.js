import React, { useState } from 'react'
import "./counter-style.css"
function Conuter() {
let [Conuter,setCounyer]=useState(0)
  return (
      <div className='container'>
          <div className="card col-4 m-5 " id='shadow-cart'>
              <div className="card-header">
                  Conuter
              </div>
              <div className="card-body">
                  <h5 className="card-title text-center pt-5 fs-1">{Conuter}</h5>
                  
                  <button className="btn btn-success m-5" onClick={() => setCounyer(Conuter+1)}>+</button>
                  <button className="btn btn-danger m-5" onClick={() => setCounyer(Conuter<=0?0:Conuter-1)}>-</button>
              </div>
          </div>
        
    </div>
  )
}

export default Conuter