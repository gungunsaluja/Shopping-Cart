import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';

const App = ()=> {
  const [isDarkMode,setDarkMode] = useState(false);
    const toggleDarkMode = ()=>{
        setDarkMode(!isDarkMode);
        
    }

  return (
    <div >
      <div className='nav'>
      <Navbar isDarkMode = {isDarkMode}  setDarkMode = {setDarkMode} toggleDarkMode = {toggleDarkMode}className = "nav"/>
      </div>
      <Routes>
        <Route path = "/" element = 
        {<Home  isDarkMode = {isDarkMode} setDarkMode = {setDarkMode} toggleDarkMode = {toggleDarkMode}/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        {/* <Route path = "/login"></Route> */}
        
      </Routes>

   
    </div>
  );
}

export default App
