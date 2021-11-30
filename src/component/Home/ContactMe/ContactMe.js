import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
export const ContactMe = () => {
    // const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9q8kb0e', 'template_r88rjc4', e.target, 'user_zq7d8Itj7WWoPa0ivbO5L')
            .then((result) => {
                console.log(result)
                e.target.reset();
            }, (error) => {
                console.log(error)

            });

    }

    return (
        <div className="pt-2 container pb-5">
            <h1 className="text-center">Contact</h1>
            <div className="d-flex justify-content-center pt-1">
                <div className="card">
                    <div className="card-body text-dark">
                        <form class="row g-3" onSubmit={sendEmail}>
                            <div class="col-12">
                                <input type="text" name="username" class="form-control" id="username" placeholder="Your Name" required />
                            </div>
                            <div class="col-12">
                                <input type="email" name="email" class="form-control" id="email" placeholder="Your E-mail Address" required />
                            </div>
                            <div class="col-12">
                                <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required />
                            </div>
                            <div class="col-12">
                                <textarea name="message" id="message" cols="15" rows="10" class="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContactMe;