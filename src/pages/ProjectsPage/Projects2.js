import  '../styles/App.css'
import  '../styles/NewApp.css'
import {useContext} from "react";
import MenuContext from "../components/MenuContext"
import {useMediaQuery} from "react-responsive";
import MobilePage from "./MobilePage";
import DesktopPage from "./DesktopPage";




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



function Projects2({isVisible, onToggle}) {

    const {isOpen} = useContext(MenuContext)
    const isMobile = useMediaQuery({query: '(max-width: 768px'});
    const isDesktop = useMediaQuery({query: '(min-width: 992px'});

    return (
        <div id="hidden" id="no-scroll-section">
        <div>
            {isMobile && <MobilePage isOpen={isOpen} onToggle={onToggle}/>}
        </div>

        <div>
            {isDesktop && <DesktopPage/>}
        </div>



        </div>

    );
}

export default Projects2;