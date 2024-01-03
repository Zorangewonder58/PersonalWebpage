import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
//import {Provider} from 'react-redux'; 
import "../pages/styles/App.css"

import {useState} from 'react';
import ReactDOM from 'react-dom/client'
import { useFormAction } from 'react-router-dom';

const formAction = (formData) => {
    return{
        type:'SUBMIT_FORM',
        payload: formData,
    };
};

const ContactForm = () =>
{
    //const dispatch = useDispatch();

    const[inputs, setInputs] = useState({});

    const[textarea, setTextarea] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleTextareaChange = (event) => {
        setTextarea(event.target.value);
    }

    const handleSubmit = (event) => {
        //Prevents event from doing its default thing
        event.preventDefault();
        alert(JSON.stringify(inputs));

        //dispatch(formAction(inputs))
    }
    return (
    <form onSubmit={handleSubmit} className='form-style-5'>
        <label>
            Name:
            <input type="text"
            name="PersonName"          
            value={inputs.PersonName || ""}
            onChange={handleChange}             
            />
        </label>
  

        <label>
            Email:
            <input type="email" 
            name='email'
            value={inputs.email || ""}
            onChange={handleChange}
             />
        </label>
        <label>
           Phone:
            <input type="tel" 
            name='phone'
            value={inputs.phone || ""}
            onChange={handleChange}
             />
        </label>

        <label>
           Date:
            <input type="date" 
            name='date'
            value={inputs.date || ""}
            onChange={handleChange}
             />
        </label>
        <label>
            Message:
        <textarea 
        name="message"
        value={textarea} 
        onChange={handleTextareaChange}
        placeholder='Please write any message that you would like to send' />
        <input type="submit" value="Submit" />
        </label>
    </form>
    );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContactForm/>
);

export default ContactForm;