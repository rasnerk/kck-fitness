import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import './Navbarlinks.css';

const NavbarLinks = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [display, setDisplay] = useState(false)
  const navigate = useNavigate()
  const clickHandlerNavbar = (e) => {
    setDisplay(prev => !prev)
    return navigate(`/${e.target.id}`);
  } 

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  return (
    <div className="navbar-links col-xl-6 col-lg-7 col-md-10 col-12 ">
      {width <= 768 &&
        <div className='hamburger' onClick={() => setDisplay(prev => !prev)}>
          <div className='top'></div>
          <div className='middle'></div>
          <div className='bottom'></div>
        </div>
      }
      {width >= 768 ?
        <ul>
          <li onClick={clickHandlerNavbar}>Home</li>
          <li id='testimonials' onClick={clickHandlerNavbar}>Testimonials</li>
          <li id='about' onClick={clickHandlerNavbar}>About Us</li>
          <li id='contact' onClick={clickHandlerNavbar}>Contact Us</li>
        </ul>
        :
        display &&
        <ul>
          <li onClick={clickHandlerNavbar}>Home</li>
          <li id='testimonials' onClick={clickHandlerNavbar}>Testimonials</li>
          <li id='about' onClick={clickHandlerNavbar}>About Us</li>
          <li id='contact' onClick={clickHandlerNavbar}>Contact Us</li>
        </ul>
      }
    </div>
  );
}

export default NavbarLinks;