import './Home.css';
import React from 'react';
import Logo from '../Logo/Logo';
import Info from './Info';
import Coaches from './Coaches';
import ShowPrep from './ShowPrep';

function Home () {
  return (
      <div className="home">
          <ShowPrep />
          <Logo />
          <Coaches />
          <Info />
      </div>
  );
}

export default Home;