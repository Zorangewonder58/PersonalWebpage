
import '../styles/App.css';
import headshot from '../images/Headshot.jpg';
import { getCurrentDate, getMoment } from '../../utils/Date';

import Navbar from '../components/Navbar/Navbar';

import ContactFooter from '../components/Footer';

import MyResume from "../assets/Tech Resume V2.pdf";

import FAMU from "../images/Famu.jpg";
import Internship from '../images/Internship.jpg'
import Gaming from '../images/Gaming.jpg';
import Skating from '../images/Proto.jpg'
import {useContext} from "react";
import MenuContext from "../components/MenuContext";
import {useMediaQuery} from "react-responsive";
import ScrollButton from "../components/ScrollButton";
import AboutMobile from "./AboutMobile";
import AboutDesktop from "./AboutDesktop";

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
  const onButtonClick = () => {
    const pdfUrl = "Tech Resume V2.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Jaden A Williams.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const left = {
  textAlign: 'left',
  borderLeft: '6px outset black',
  float: 'left'
};

const leftimg = {

  float: 'left'
};

const right = {
  textAlign: 'right',
  borderRight: '6px outset black',
  float: 'right',
}

const rightimg = {
  float: 'right',
}

const center = {
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

const bottom = {
  paddingBottom: '0px',
  marginBottom: '0px',
  position: 'absolute',
  bottom:'0',
  width: '100%',
  display: 'block',
}

function HandleDownload()
{
  const {isOpen} = useContext(MenuContext);
  const resumeUrl = MyResume;
  const fileName = 'Jaden A. Williams.pdf';


  //Create link element
  const link = document.createElement('a');


  link.href = resumeUrl;
  link.download = fileName;

  //Append the link to doc
  document.body.appendChild(link);

  //Trigger a click on the link to initiate the download
  link.click();

  //Remove the link from the document
  document.body.removeChild(link);
}

  const {isOpen} = useContext(MenuContext);
  const isMobile = useMediaQuery({query: '(max-width: 768px'});
  const isDesktop = useMediaQuery({query: '(min-width: 992px'});

  return (
    <>

      {isMobile && <AboutMobile onToggle={onToggle} isOpen={isOpen}/>}

      {isDesktop && <AboutDesktop onToggle={onToggle} />}
    </>
  );
}

export default Home;
