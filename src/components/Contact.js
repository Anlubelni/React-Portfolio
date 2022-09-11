import React from 'react';
import "../index.css"

function ContactForm() {
    return (
        <section id="contact">

            <h1 className="contact">To get in contact with me...</h1>
                <div>

             //*Area for leaving their name, email, and message*/
                    <div className="name">Input your name:</div>
                    <input type="text" />

                    <div className="email">Your Email Address here:</div>
                    <input type="email"/>

                    <div className="message">Leave a Message here:</div>
                    <input type="text" />

            //*Submit/save button 
                     <button type="submit" id="submit">Submit</button>


                </div>

        </section>
    );
}
    
export default ContactForm;