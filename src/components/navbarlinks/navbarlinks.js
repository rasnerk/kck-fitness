import './navbarlinks.css';
import React, { useEffect, useState } from 'react';


function NavbarLinks() {

  const clickHandlerNavbar = (e) => {
    let _id = e.target.id;
    console.log(_id);
    window.open(`/${_id}`, "_self")
  }

  return (
    <div className="navbar-links col-1">
        <ul>
            <li onClick={clickHandlerNavbar}>Home</li>
            <li id='testimonials' onClick={clickHandlerNavbar}>Testimonials</li>
            <li id='about' onClick={clickHandlerNavbar}>About Us</li>
            <li id='contact' onClick={clickHandlerNavbar}>Contact Us</li>
        </ul>
    </div>
  );
}

export default NavbarLinks;