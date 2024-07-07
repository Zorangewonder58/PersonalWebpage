import Developerimg from "../images/Developer.jpg";
import SoftDeveloperimg from "../images/SoftDeveloper.jpg";
import ScrollButton from "../components/ScrollButton";
import ProgramBackground from "../images/ProgramBackground.jpg";
import PielogyPic from "../images/Pieology.jpg"
import RossPic from "../images/Ross.jpg"
import '../styles/NewApp.css'
import TutorPic from "../images/Tutoringpic.jpeg"
import Internship from "../images/InternshipPic.png"

function AspirationsMobile({isOpen, onToggle})
{
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

    return (<div className="Aspirations" id='main' style={{ marginLeft: isOpen ? '250px' : '0' }}>
        <div id='content-wrap' style={{translateX: isOpen ? '-250px' : '0'}}>
            <header>
                <h1>
                    Experience
                </h1>
            </header>

            <body>


            <div className='AspirationMobileSection' style={borderright}>

                <p>Lets take a journey through my work experience..</p>

                <h2>Team Member at Pieology Pizzeria.</h2>

                <img src={PielogyPic} alt="Picture of a team member at Pielogy interacting with a customer"/>
                <p>Starting this job in quarantine was an interesting experience.
                    While dealing with the conditions of the time, I was facing my first exposure to customer service.
                    This job taught me alot about what it means to be a working man. From time management to
                    punctuality, I can say that this was a valuable experience.</p>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br />
            <br />


            <div className='AspirationMobileSection' style={borderleft}>

                <h2>Cashier-Ross Dress for Less </h2>

                <img src={RossPic} alt="Picture of a team member at Pielogy interacting with a customer"/>

                <p>This job taught me what it means to deal with many different people in a fast paced environment.
                    Although it was stressful, I gained an appreciation for hard work.</p>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className='AspirationMobileSection' style={borderleft}>
                <h2>Math/Programming Tutor </h2>

                <img src={TutorPic} alt="Tutoring"/>
                <p>This job brought me experience in programming as well as teaching. Through my experience with this
                    job, I have gained an appreciation
                    for numerous methods to learn and grow. Watching my tutees excel fills me with pride everyday</p>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className='AspirationMobileSection' style={borderleft}>
                <h2> Tech Support Internship-Liberty Mutual </h2>

                <img src={Internship} alt="Picture of Internship"/>

                <p>This first internship was a Tech Support Internship. This included exposure to Corporate work and
                    life.</p>


            </div>


            <div className='AspirationMobileSection' style={borderleft}>
                <h2>SWE Internship-Liberty Mutual </h2>

                <img src={Internship} alt="Picture of Internship"/>

                <p>This internship was a Software Engineering Internship. During this Internship, I learned a great
                    deal: Including Sprint work cycles, Using Company Frameworks, and adopting concept work into ongoing
                    projects. I gained an appreciation for what it truly means to be a software engineer</p>


            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h3>Independent Projects</h3>

            <p>When aspiring to be a developer, it is important to build your skills on your own. This can't be done in
                the classroom, it can only be done through independent research and experience. This can be done through
                personal projects, solving leetcode problems, etc. It is crucial that a developer is always learning.
                For this reason, I have started numerous projects on my own to build my knowledge. This includes: An app
                in JavaFX, this Website, and some indie games to name a few. Pursuing these projects have taught me alot
                about what it means to be a developer and to problem solve.
            </p>

            <h3>Education</h3>

            <p>For the past few years, I have been pursuing a bachelors in Computer Science at Florida Agricultural and
                Mechanical University. Before I attended this program, I had a vested interest in computer science,
                however it grew stagnant. So much so, that I initially majored in architecture. Since changing my major,
                my love for computer science has only grew. Attending this school has made me more curious and more
                passionate about the field. The more that I learn, the more I want to learn.</p>
            </body>

            <div className="ScrollButt">
            <a onClick={onToggle}> <ScrollButton sectionId="About" content="About"/></a>
            </div>

        </div>

        {/*<ContactFooter />*/}

    </div>);
}

export default AspirationsMobile;