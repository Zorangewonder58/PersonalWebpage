import FAMU from "../images/Famu.jpg";
import Gaming from "../images/Gaming.jpg";
import CollegiatePic from "../images/DSC03049-2.JPEG";
import Skating from "../images/Proto.jpg";
import ScrollButton from "../components/ScrollButton";
import {useContext} from "react";
import MenuContext from "../components/MenuContext";
import MyResume from "../assets/Tech Resume V2.pdf";
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

function AboutDesktop({onToggle})
{

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

    return (
        <div className="About" id='mainDesktop'>
            <div id='content-wrap'>
                <header>
                    <h1>
                        Learn about me!
                    </h1>
                </header>

                <br/>

                <body>
                <div className='AboutSection' style={left}>

                    <p>Allow me to reintroduce myself, I am Jaden Williams-a Computer Science scholar at Florida
                        Agricultural and Mechanical University from Jacksonville Florida.
                        Fun Fact: I arrived to College with my
                        Associates Degree through an Early College program at my highschool</p>
                </div>

                <div className='AboutImage' style={rightimg}>
                    <img src={FAMU} alt='Me'/>
                </div>

                <div className='AboutSection' style={right}>
                    <p>I have loved all things technology since I was a boy. I had the handhelds, consoles, and
                        everything and became obsessed with them. This inspired me to form a passion for working with
                        computers and solving problems, motivating me to pursue this major</p>
                </div>

                <div className='AboutImage' style={leftimg}>
                    <img src={Gaming} alt='Me'/>
                </div>

                <div className='AboutSection' style={left}>
                    <p>This academic journey has taken me many places. I've learned much from the experiences I've gained in these short four years.
                        From joining my organization, Collegiate 100, to traveling from place to place with competitions. I wouldn't trade this experience for the world.</p>
                </div>

                <div className='AboutImage' style={rightimg}>
                    <img src={CollegiatePic} alt='Me'/>
                </div>

                <div className='AboutSection' style={right}>
                    <p>Outside of programming, I've gained an interest in skating, exercise, and general personal
                        development.</p>
                </div>


                </body>

                <br/>
            </div>


            <div style={center}>
                <button
                    type='button'
                    className='button'
                    style={center}
                    onClick={HandleDownload}
                >Please click here for my Resume
                </button>



            </div>

            <br/>

            {/*<ContactFooter />*/}

        </div>
    );
}

export default AboutDesktop;