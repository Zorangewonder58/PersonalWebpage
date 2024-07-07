
import '../styles/App.css';
import headshot from '../images/Headshot.jpg';
import { getCurrentDate, getMoment } from '../../utils/Date';

import TechBackground from "../images/TechnologyBackground.png";

import Navbar from '../components/Navbar/Navbar';

import ContactFooter from '../components/Footer';
import ContactForm from '../../utils/ContactForm';
import { useHref } from 'react-router-dom';
import {useContext} from "react";
import MenuContext from "../components/MenuContext";
import {useMediaQuery} from "react-responsive";
import MobilePage from "../ProjectsPage/MobilePage";
import ContactMobile from "./ContactMobile";
import ContactDesktop from "./ContactDesktop";

console.log(getMoment());

const currentMoment = getMoment('-')

const  script = document.createElement('script')
script.src = "https://platform.linkedin.com/badges/js/profile.js";

script.async = true;
document.body.appendChild(script);

let Greeting = "Hi There!"

if(currentMoment == "12-25")
   Greeting = "Merry Christmas!";
else if(currentMoment == "12-31")
   Greeting = "Happy New Years Eve!"
else if (currentMoment == "01-01")
   Greeting = "Happy New Year!"
else if (currentMoment == "06-09")
    Greeting = "Happy Birthday to Me!"



   /* <br></br>
   <div className="socials">
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="jaden-adonal-williams" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jaden-adonal-williams?trk=profile-badge"
        alt='Link to LinkedIn Profile'></a></div>
        
        <p></p>
        <a href="https://www.instagram.com/lj.will03/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>*/
    //
const example = "JSX"
function Contact({isVisible, onToggle}) {

    const {isOpen} = useContext(MenuContext);
    const isMobile = useMediaQuery({query: '(max-width: 768px'});
    const isDesktop = useMediaQuery({query: '(min-width: 992px'});


    return (
        <>
            {isDesktop && <ContactDesktop isOpen={isOpen}/> }

            <div>
                {isMobile && <ContactMobile onToggle={onToggle} isOpen={isOpen}/>}
            </div>

        </>
    );
}

export default Contact;
