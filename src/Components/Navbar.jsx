import { FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Navbar ({isDarkMode,setDarkMode,toggleDarkMode}){
    const {cart} = useSelector((state)=>state);
    
    return (
      <div>
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

            <NavLink to = "/">
                <div className='ml-5'>
                <img src = {logo}  className = 'h-[70px] w-[150px]'/>
                </div>
            </NavLink>
           
            <div className = 'flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                <NavLink to = "/">
                <p checked = {isDarkMode} onChange={toggleDarkMode}>
                    Home
                </p>
                </NavLink>
                <NavLink to = "/cart">
                    <div className = 'relative'>
                    <  HiShoppingCart  className = 'text-2xl icons'/>
                    {
                        cart.length > 0 && 
                        <span className = 'absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                    }
                   

                    </div>

                </NavLink>
                <NavLink to = "/login">
                    <p>Login</p>
                </NavLink>
                <NavLink to = "/signup">
                    <p>SignUp</p>
                </NavLink>
               
                <DarkModeSwitch
                       
                       checked={isDarkMode}
                       onChange={toggleDarkMode}
                       size={30}
                   />
               

              
               

            </div>

        </nav>

      </div>
      )
};
