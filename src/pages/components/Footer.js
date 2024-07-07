import React from 'react';
import './../styles/App.css';



const ContactFooter = ({phoneNumber}) => {

    const call = `tel:${phoneNumber}`;

    return(
        
        <footer>
            <div className="footercontact" >
            <p>&copy; Copyright 2024. All Rights Reserved.</p>
	        <p><a href="famu.edu">Florida A&M University</a></p> 
	
	
	<h4 class="center">Reach me at: </h4>
    <p>Email: <a href="mailto:jawilliams904@outlook.com"> jawilliams904@outlook.com</a></p>
	<p>Cell: <a href={call}> 904-610-3578</a></p>
	
	</div>
  </footer>
    );
}

export default ContactFooter;