import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/store";
import { ToastContainer } from 'react-toastify'
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <BrowserRouter>
    {/* routes create kar skte hai */}
  
    {/* isse routes create kar skte hai */}
  <Provider store = {store}>
    {/* provider redux ke liye use kiya haiii */}
    <App />

    <Toaster/>
  </Provider>
  </BrowserRouter>
 
 
  
  
)
