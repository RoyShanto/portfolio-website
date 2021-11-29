import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_r88rjc4', form.current, 'user_zq7d8Itj7WWoPa0ivbO5Lf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" /><br />
            <label>Email</label>
            <input type="email" name="user_email" /><br />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
export default ContactMe;



// emailjs.sendForm('gmail', 'template_r88rjc4', form.current, 'user_zq7d8Itj7WWoPa0ivbO5Lf')