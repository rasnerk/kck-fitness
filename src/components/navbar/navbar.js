import './navbar.css';
import NavbarLinks from '../navbarlinks/navbarlinks';

function Navbar() {
  return (
    <div className="navbar">
        <NavbarLinks></NavbarLinks>
        <div className='col-2'>
            <button id='login' className='login-btn'>Login</button>
        </div>
    </div>
  );
}

export default Navbar;