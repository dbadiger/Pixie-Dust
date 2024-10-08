import React from "react"
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import Collection from "./Pages/Collection";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";


const App =()=>{

  
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/place-order" element={<PlaceOrder/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;