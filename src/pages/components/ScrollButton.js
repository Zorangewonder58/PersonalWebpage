import React, {useRef} from 'react';
import Button from '@mui/material/Button'

function ScrollButton({ sectionId , content}) {
    const buttonRef = useRef(null);

    const handleClick = () => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
    };

    return (
        <Button  sx={{ backgroundColor: '#795f0e'}}
                 className="transitionButton"
                 variant="contained"
                 ref={buttonRef}
                 onClick={handleClick}>
            {content}
        </Button>
    );
}

export default ScrollButton;