import ContactForm from "../../utils/ContactForm";
import ContactFooter from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

function ContactMobile({isOpen, onToggle})
{

    function LinkedIn ()
    {
        const LinkedInUrl = "https://www.linkedin.com/in/jaden-adonal-williams/";

        window.open(LinkedInUrl, "_blank");
    };

    function Github ()
    {
        const GithubUrl = "https://github.com/Zorangewonder58";

        window.open(GithubUrl, "_blank");

    }

  return( <div className='Contact' id='main' style={{ marginLeft: isOpen ? '250px' : '0' }}>
        <header>
            <div >
                <h1>
                    Feel free to Reach Out!
                </h1>
            </div>
        </header>

        <main>


            <h2>Anything Unclear?</h2>
            <h2>Would you like to talk further about me?</h2>

            <h3>Feel free to message me on the following social media</h3>
            <div className='social'>

                <button
                    type='button'
                    className='button'
                    onClick={LinkedIn}
                >Click here for my LinkedIn</button>
                <button
                    type='button'
                    className='button'
                    onClick={Github}
                >Click here for my Github</button>

            </div>

            <div className="ContactForm">
                <h2>Please fill out this form to get in contact with me</h2>
                <ContactForm />

                <div className="ScrollButt">
                <a onClick={onToggle}><ScrollButton sectionId="home" content="Return to Home"/> </a>
                </div>

                <br></br>
                <br></br>
            </div>
        </main>

        <ContactFooter phoneNumber={"904-610-3578"} />
    </div>);
}

export default ContactMobile;