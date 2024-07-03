import {useRef, useState, useEffect} from "react";
import { useInView } from 'react-intersection-observer'


function Section({children, id, isActive, isVisibled}) { //Handles each page's content and scrolling
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false); //Track section visibility

    const {ref, inView } = useInView({threshold: 0.5});//Observe section with 50% visibility

    useEffect(() => {
        if(inView) {
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    }, [inView]);

    return(
        <section style={{display: isVisibled ? 'block' : 'none'}} ref={ref} id={id} className={`section ${isActive && 'active'}`}>
            {children}
        </section>
    );
}

export default Section;