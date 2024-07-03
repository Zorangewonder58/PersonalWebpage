import React, {useContext} from 'react';
import '../../styles/App.css';

import {Link} from 'react-router-dom'
import {useState} from 'react'

import Home from '../../Home.js'
import Projects from '../../Projects'
import Aspirations from '../../AspirationsPage/Aspirations'
import Contact from '../../ContactPage/Contact'
import About from '../../AboutPage/About'


//Image imports
import HomeIcon from '../../images/Homeicon.png'
import ProjectsIcon from '../../images/Projecticon.jpg'
import AspireIcon from '../../images/Aspireicon.png'
import ContactIcon from '../../images/Contacticon.png'
import AboutMeIcon from '../../images/Aboutmeicon.png'
import HamburgerIcon from '../../images/HamburgerIcon.png'
import {useMediaQuery} from "react-responsive";

import MenuContext from "../MenuContext";


let Page = <Home />;




const Navbar = () => {

  const isMobile = useMediaQuery({query: '(max-width: 768px'});
  const isDesktop = useMediaQuery({query: '(min-width: 992px'});
  const {isOpen, setIsOpen} = useContext(MenuContext);

  function openNav()
{
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('mainDesktop').style.marginLeft = '250px';
    document.getElementById('returnMenu').style.display = 'none';
}

function closeNav()
{
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('mainDesktop').style.marginLeft = '0';
  document.getElementById('returnMenu').style.display = 'inline'
}

const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


const underlinestyle = {
  BorderBottom: '1px solid black',
}

    return (
        <>
        {isMobile && ( // Render hamburger menu only on mobile devices

            <div>

                {isOpen && <div className={`sidenav ${isOpen ? 'active' : ''}`} id="mySidenav">
                    <img width="40px" height="40px" onClick={toggleMenu} src={HamburgerIcon} alt="Menu"/>
                    <h3 style={underlinestyle}>Jaden Williams</h3>
                    <h4>Aspiring Game Developer/Software Engineer</h4>
                    <nav>
                        <ul>

                            <li>
                                <img src={HomeIcon} alt="Home"/>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <img src={ProjectsIcon} alt="Projects"/>
                                <Link to="/Projects">Portfolio</Link>
                            </li>
                            <li>
                                <img src={AspireIcon} alt="Aspirations"/>
                                <Link to="/Aspirations">Aspirations</Link>
                            </li>
                            <li>
                                <img src={AboutMeIcon} alt="About"/>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <img src={ContactIcon} alt="Contact"/>
                                <Link to="/Contact">Contact</Link>
                            </li>

                        </ul>
                    </nav>
                </div>}

                {!isOpen && <div className="empty">
                </div>

                }
            </div>
        )
        }


        {
            isDesktop &&  <>
                <div className='sidenav' id='mySidenav'>
                <img width="40px" height="40px" onClick={closeNav} src={HamburgerIcon} alt="Menu"/>


                <h3 style={underlinestyle}>Jaden Williams</h3>
                <h4>Aspiring Software Engineer</h4>
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
                        {/*<li>*/}
                        {/*    <img src={HamburgerIcon} alt="Closing button"/>*/}
                        {/*    <a onClick={closeNav}>Close Menu</a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>

                <div id='returnMenu'>
                    <img width="40px" height="40px" onClick={openNav} src={HamburgerIcon} alt="Menu"/>
                </div>
            </>

                }
            </>
            )
            ;
        };

            export default Navbar;