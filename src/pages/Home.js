
import './styles/App.css';
import './styles/NewApp.css'
import headshot from './images/Headshot.jpg';
import collegiatepic from './images/Collegiatepic.JPEG'
import { getCurrentDate, getMoment } from '../utils/Date';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';

import ContactFooter from './components/Footer';
import React, {useContext} from "react";
import MenuContext from "./components/MenuContext";
import ScrollButton from "./components/ScrollButton";
import App from "./App";
import Projects2 from "./ProjectsPage/Projects2";
import {useMediaQuery} from "react-responsive";

console.log(getMoment());

const currentMoment = getMoment('-')

let Greeting = "Hi There!"

if(currentMoment == "12-25")
   Greeting = "Merry Christmas!";
else if(currentMoment == "12-31")
   Greeting = "Happy New Years Eve!"
else if (currentMoment == "01-01")
   Greeting = "Happy New Year!"
else if (currentMoment == "06-09")
    Greeting = "Happy Birthday to Me!"

    //
const example = "JSX"


function Home({isVisible, onToggle}) {
  const backgroundstyle = {
    backgroundImage: `url(${collegiatepic})`,
    height: "100vh",
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  };

    const {isOpen} = useContext(MenuContext);

    const SetProjectsVisible = () => {
            App.isSectionProjectVisible = true;

    }

    const isMobile = useMediaQuery({query: '(max-width: 768px'});


    return (
    <><div className="Home" id="hidden" id='mainDesktop' style={{ marginLeft: isOpen ? '250px' : '0' }} style={backgroundstyle}>
        <header className="Home-header">
            <h3>{Greeting}</h3>
            <h3>
                Welcome to my Website!
            </h3>

            {isMobile && <div className="ScrollButt">
                <a onClick={onToggle}><ScrollButton  sectionId="Projects" content="Projects"/></a>
            </div>}

        </header>

        <body>
        <div className='bottom'>


        </div>
        </body>

    </div>
    </>
  );
}

export default Home;
