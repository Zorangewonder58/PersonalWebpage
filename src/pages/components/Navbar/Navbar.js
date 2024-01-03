import React from 'react';
import '../../styles/App.css';

import {Link} from 'react-router-dom'

import Home from '../../Home.js'
import Projects from '../../Projects.js'
import Aspirations from '../../Aspirations.js'
import Contact from '../../Contact.js'
import About from '../../About.js'


//Image imports
import HomeIcon from '../../images/Homeicon.png'
import ProjectsIcon from '../../images/Projecticon.jpg'
import AspireIcon from '../../images/Aspireicon.png'
import ContactIcon from '../../images/Contacticon.png'
import AboutMeIcon from '../../images/Aboutmeicon.png'

let Page = <Home />;



const Navbar = () => {
  function openNav()
{
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeNav()
{
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

const underlinestyle = {
  BorderBottom: '1px solid black',
}

    return (
      <><div className='sidenav' id='mySidenav'>
        <h3 style={underlinestyle}>Jaden Williams</h3>
        <h4>Aspiring Game Developer/Software Engineer</h4>
        <nav>
          <ul>
            <li>
              <img src={HomeIcon} alt="Home"/>
              <Link to="/">Home</Link>
            </li>
            <li>
            <img src={ProjectsIcon} alt="Home"/>
              <Link to="/Projects">Portfolio</Link>
            </li>
            <li>
            <img src={AspireIcon} alt="Home"/>
              <Link to="/Aspirations">Aspirations</Link>
            </li>
            <li>
              <img src={AboutMeIcon} alt='About'/>
              <Link to="/About">About</Link>
            </li>
            <li>
            <img src={ContactIcon} alt="Home"/>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      </>
    );
};

export default Navbar;