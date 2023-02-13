import "../form.css"
import { useFormik } from 'formik';
import * as yup from "yup";
function Formik() {
    
  const formik=useFormik({
    initialValues:{
        username:"",
        password:"",
          selecter:""
    },
    // validationSchema:object({
    //     username: yup.string().max(10,"username must be 10 letters"),
    //     password: yup.string().max(10,"password must be 10 letters"),
    //     selecter: yup.required(),

    // })
  })

    return (
        <div className='container bg-warning mb-5 mt-5' >
            <h1>Formik</h1>
            <form className="row g-3 p-3">
                <div className="col-md-10 ">

                    {/* Full Name */}
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Full Name</label>
                        <input type="text" id="Full_Name" name='fullname'
                      onChange={formik.handleChange}

                        />
                    </div>

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
                            onChange={formik.handleChange}
                        />
                    </div>


                    {/* City */}
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">City</label>
                        <select id="inputState" className="form-select" name="selecter">
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
                    <button type="submit" className="btn btn-primary" >Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Formik