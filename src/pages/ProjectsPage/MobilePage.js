import AffirmMotiv from "../images/Affirmio Motivation.png";
import Affirmio from "../assets/Affirm.io(Complete App).zip";
import ZOW from "../images/ZOW.png";
import ZOWexe from "../assets/ZOW executable.zip";
import GameJam from "../images/GameJam.jpg";
import Timefalldocument from "../assets/Timefall.txt";
import PythonCreatives from "../images/Pythoncreatives .png";
import PythonProject from "../assets/Python Database Project.zip";
import ConnectzPic from "../images/ConnectzAppPicture.png";
import ConnectzApp from "../assets/Connetz-main.zip";
import ContactFooter from "../components/Footer";
import  '../styles/App.css'
import '../styles/NewApp.css'
import {useState} from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {ArrowBack} from "@mui/icons-material";
import ScrollButton from "../components/ScrollButton";

const handleClick = () => {
    alert('Hello world!');
};

const underlinestyle = {
    borderBottom: '1px solid black',
}

const center =
    {
        textAlign: 'center',
        alignContent: 'center'
    }

function AffirmioPage() {

    return (
<div className="Sect">
        <div className='ProjectImages'>
            <img src={AffirmMotiv} alt='Affirmio Homepage'/>
        </div>
    <h1> Personal Projects</h1>
    <div className='MobileProjectsSection'>

        <h2>Affirm.io: </h2>

        <p> A desktop application that returns motivations from a database and allows users to add to it. Created
            using
            IntelliJ and JavaFX </p>


        <a href={Affirmio} download="Affirm" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
            {/*<Button variant="contained" color="inherit"> Learn More!</Button>*/}
        </a>


    </div>
    <br></br>
    <br></br>
</div>
)
    ;
}

function ZOWPage() {
    return (
        <div className="Sect">
        <div className='ProjectImages'>
        <img src={ZOW} alt='Affirmio Homepage'/>
    </div>

    <div className='MobileProjectsSection'>
        <h2>Z the Orange Wonder:</h2>
        <p> A 3d hack and slash game created in Unity. The main character has powers of telekinesis and sword fighting
            abilities. This game features numerous levels including a boss fight at the end</p>
        <a href={ZOWexe} download="ZOW executable" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
            {/*<Button variant="contained" color="inherit"> Learn More!</Button>*/}
        </a>


    </div>
        </div>);
}

function TimefallPage() {
    return(
        <div className="Sect">
        <div className='ProjectImages'>
        <img src={GameJam} alt='Affirmio Homepage'/>
    </div>

    <div className='MobileProjectsSection'>
        <h2>Timefall: </h2>
        <p> A rouge-like adventure game initially created for the Google Game Jam. This project was co-founded with
            Three other members: Ronnie Burns, Taliyah Rivera, and Chiyle Briggins </p>

        <a href={Timefalldocument} download="Timefall documentation" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
            {/*<Button variant="contained" color="inherit"> Learn More!</Button>*/}
        </a>


    </div>
    <br></br>
    <br></br>
        </div>);
}

function CreativesPage() {
    return (
        <div className="Sect">
        <div className='ProjectImages'>
        <img src={PythonCreatives} alt='Affirmio Homepage'/>
    </div>
    <div className='MobileProjectsSection'>
        <h1>School Projects</h1>
        <h2>Creatives App: </h2>
        <p>Python integration with SQL to make a simulated App for Creative guidance</p>


        <a href={PythonProject} download="Source Code" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
            {/*<Button variant="contained" color="inherit"> Learn More!</Button>*/}
        </a>
    </div>
        </div>)
}

function ConnectzPage() {
    return(
        <div className="Sect">
        <div className='ProjectImages'>
        <img src={ConnectzPic} alt="Picture of a screen"/>
    </div>

    <div className="MobileProjectsSection">
        <h2>Connectz App: </h2>
        <p>An application for connecting small businesses to clients</p>

        <a href={ConnectzApp} download="Source Code" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
            {/*<Button variant="contained" color="inherit"> Learn More!</Button>*/}
        </a>
    </div>
        </div>
        );
    };


        function MobilePage({isOpen, onToggle}) {

            const [activeSectionIndex, setActiveSectionIndex] = useState(0);
            const sections = [AffirmioPage, ZOWPage, TimefallPage, CreativesPage, ConnectzPage]; // Array of section components

            const handleClick = () => {
                const nextIndex = (activeSectionIndex + 1) % sections.length;
                setActiveSectionIndex(nextIndex);
            }

            const handleOtherClick = () => {



                if(activeSectionIndex === 0)
                    setActiveSectionIndex(sections.length - 1);
                else {
                    const nextIndex=(activeSectionIndex -1 + sections.length) % sections.length;
                    setActiveSectionIndex(nextIndex)
                }
            }


    return(

        <div className="ProjectsMobile" id='main'>
            <header>

                <h1>
                    Welcome to my Portfolio!
                </h1>
            </header>


            <div id='content-wrap' style={{translateX: isOpen ? '-250px' : '0'}}>


                <div className="Sectioned">

                    {sections.map((Sect, index) => (
                        <div key={index} className={`section ${index === activeSectionIndex ? '' : 'hidden'}`}>
                            <Sect/>
                        </div>
                    ))}

                </div>

                <br></br>
                <br></br>
                <br></br>


            </div>


            <div className="Sected">


                <Button style={{marginRight: '100px', marginLeft: '200px'}} onClick={handleOtherClick} color={"inherit"}
                        variant="contained" endIcon={<ArrowBack/>}></Button>
                <Button onClick={handleClick} color={"inherit"} variant="contained"
                        endIcon={<ArrowForwardIcon/>}></Button>
                {/*Create a button to go forward and back on the projects*/}


                <a
                    className="App-link"
                    href="https://github.com/Zorangewonder58"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={center}
                >
                    <h1>Please Check out my Github!</h1>
                </a>
            </div>

            <div className="ScrollButt">
                <a onClick={onToggle}> <ScrollButton sectionId="Aspirations" content="Aspirations"/></a>
            </div>

        </div>
    );
        }

export default MobilePage;