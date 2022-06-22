import './Navbar.css';
import NavbarLinks from './NavbarLinks/NavbarLinks';

function Navbar() {
  return (
    <div className="navbar">
      <div className='col-xxl-3 col-xl-2 col'>
        <img className='kck-logo' src='imgs/logo.png' alt='logo' />
      </div>
      <NavbarLinks></NavbarLinks>
      <div id='login-btn-container' className='col-xxl-3 col-xl-2 col'>
        {/* <button id='login' className='login-btn' disabled={true}>Login</button> */}
      </div>
    </div>
  );
}

export default Navbar;