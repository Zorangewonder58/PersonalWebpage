
import '../styles/App.css';
import '../styles/NewApp.css'
import headshot from '../images/Headshot.jpg';
import { getCurrentDate, getMoment } from '../../utils/Date';

import Navbar from '../components/Navbar/Navbar';

import ContactFooter from '../components/Footer';

import Developerimg from '../images/Developer.jpg'
import ProgramBackground from '../images/ProgramBackground.jpg'
import SoftDeveloperimg from '../images/SoftDeveloper.jpg'
import {useContext} from "react";
import MenuContext from "../components/MenuContext";
import {useMediaQuery} from "react-responsive";
import ScrollButton from "../components/ScrollButton";
import AspirationsMobile from "./AspirationsMobile";
import AspirationsDesktop from "./AspirationsDesktop";

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

    const {isOpen} = useContext(MenuContext);

    const isMobile = useMediaQuery({query: '(max-width: 768px'});
    const isDesktop = useMediaQuery({query: '(min-width: 992px'});

  const backgroundstyle = {
    backgroundImage: `url(${ProgramBackground})`,
    height: "100vh",
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  };

  const borderright = {
    borderRight: '4px solid black',
  };

  const borderleft = {
    borderLeft: '4px solid black',
  }
  return (
    <>

        {isMobile && <AspirationsMobile onToggle={onToggle} isOpen={isOpen}/> }

        {isDesktop && <AspirationsDesktop onToggle={onToggle} />}

    </>
  );
}

export default Home;
