import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
      <div className='bg-blue-500'>
        <div className="flex flex-row justify-between">

            <NavLink to = "/">
                <div>
                <img src = "src\assets\android-chrome-512x512.png" />
                </div>
            </NavLink>
           
            <div>
                <NavLink>
                <p>
                    Home
                </p>
                </NavLink>
                <NavLink>
                    <div>
                    <FaShoppingCart/>

                    </div>
                </NavLink>
               

              
               

            </div>

        </div>

      </div>
      )
};
export default Navbar;