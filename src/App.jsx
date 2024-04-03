import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Cart from './Pages/Cart';
const App = ()=> {
  

  return (
    <div >
      <div className='bg-slate-900 '>
      <Navbar/>
      </div>
      <Routes>
        <Route path = "/" element = 
        {<Home/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        
      </Routes>
   
    </div>
  );
}

export default App
