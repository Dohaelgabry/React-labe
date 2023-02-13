import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  let cart = useSelector((state) => state.cartReducer.cart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className=" container">
        <NavLink className="navbar-brand" to="/Home">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

           
            <li className="nav-item">
              <NavLink className="nav-link" to="/pre">moives</NavLink>
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to="/Book">Books</NavLink>
            </li>


            <NavLink type="button" className="btn btn-secondary position-relative" to="/Cart">
              <i className="fa-solid fa-cart-shopping fs-4"></i>
              
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </NavLink>


            <li className="nav-item">
              <NavLink className="nav-link" to="/Conuter">Conuter</NavLink>
            </li>



            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">login</NavLink>
            </li>

          </ul>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar


