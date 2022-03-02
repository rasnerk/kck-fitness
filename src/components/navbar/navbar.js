import './navbar.css';
import NavbarLinks from '../navbarlinks/navbarlinks';

function Navbar() {
  return (
    <div className="navbar">
      <img className='kck-logo' src='logo1.png' alt='logo'></img>
        <NavbarLinks></NavbarLinks>
        <div className='col-2'>
            <button id='login' className='login-btn'>Login</button>
        </div>
    </div>
  );
}

export default Navbar;