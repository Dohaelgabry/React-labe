import React, { useState } from 'react'
import "./form.css"
function Form() {
  let [input, setIput] = useState({});
  let [err, setErr] = useState({});

  function save(e){
    e.preventDefault();
    // console.log(input)
  }

  function addData(e){

    console.log("consel:e.target.value")
    console.log(e.target.value)
    console.log("consel:e.target.value.length")
    console.log(e.target.value.length)
    console.log("consel:e.target.id")
    console.log(e.target.id)
    console.log("consel:input")
    console.log(input)



    if (e.target.name =="fullname"){
      if (e.target.value.length > 10) {
        setErr({ ...err, user: "Full Name must be 10 letters" })
      } else if (e.target.value.length == 0) {
        setErr({ ...err, user: "Full Name required" })
      } else if (e.target.value.length < 10) {
        setErr({ ...err, user: "Full Name must be 10 letters" })
      } else {
         setIput({...input, name: e.target.value})
        setErr("")
      }
    }else{
      if (e.target.value.length > 10) {
        setErr({ ...err, password: "password must be 10 letters" })
      } else if (e.target.value.length == 0) {
        setErr({ ...err, password: "password required" })
      } else if (e.target.value.length < 10) {
        setErr({ ...err, password: "password must be 10 letters" })
      } else {

        setIput({ ...input, password: e.target.value })
        setErr("")
      }
    }
    
   
  }


  return (
    <div className='container bg-warning mb-5 mt-5' >
      <form className="row g-3 p-3">
        <div className="col-md-10 ">

          {/* Full Name */}
          <div className="col-6">
            <label for="inputAddress" className="form-label">Full Name</label>
            <input type="text" id="Full_Name" name='fullname'
              onChange={addData} 
              className={err.user?"bord-erro":""}
              
              />
          </div>
          <small style={{ color: "red" }}>{err.user}</small>

          {/* Email */}
          <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" className="m-3" id="inputEmail4"
          
          />
          </div>



          {/* Password */}
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" name="password" id="inputPassword4"
            onChange={addData} 
              className={err.password ? "bord-erro" : ""}
            />
          </div>


          {/* City */}
          <div className="col-md-4">
            <label for="inputState" className="form-label">City</label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>Cairo</option>
              <option>Aswan</option>
              <option>Luxor</option>
              <option>Giza</option>
            </select>
          </div>


        </div>
        
        
        {/* submit */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={save}>Sign in</button>
        </div>
      </form>
      </div>
  )
}

export default Form