import Pre from'./productlist/Pro'
import './App.css';
import Navbar from './navbar/Navbar';
import Item from'./productlist/Item';
import Login from'./login/login'
import Home from './Home/Home'
import Book from './Book/Book'
import Cart from "./productlist/cart"
import { Route, Routes } from 'react-router';
import Auth from './navbar/Auth';
import Conuter from './counter/Conuter';
import { Provider } from "react-redux"
import { store } from './Redux/Store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Navbar/>

      <Routes>

        <Route element={<Auth />}>
          <Route path='/pre' element={<Pre />} />
          <Route path='/item' element={<Item />} />
        </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Book' element={<Book />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Conuter' element={<Conuter />} />
      </Routes>
 
    </div>
    </Provider>
  );
}

export default App;
