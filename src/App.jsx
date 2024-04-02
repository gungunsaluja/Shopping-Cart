import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Cart from './Pages/Cart';
function App() {
  

  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route path = "/" element = 
        {<Home/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        
      </Routes>
   
    </div>
  )
}

export default App
