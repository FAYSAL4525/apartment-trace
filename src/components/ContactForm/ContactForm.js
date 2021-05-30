import React from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';


const ContactForm = () => {
    
    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d9rg24e', 'template_uff1tfa', e.target, 'user_hXIvwSed5ODR3MiaLJtHF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Thanks for message, I will contact you soon');
    }


    return (
      <section className="main-container p-3">
        <h2 className="text-center pt-5 brand-text"> CONTACT THE AGENT</h2>
        <h5 className="text-center mb-4 text-muted pb-4">
          If you wanna get in touch, talk to agent or just say hi
        </h5>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <form className="form-area" action="" onSubmit={sendMessage}>
                <input
                  style={{ transform: "scale(1)" }}
                  type="text"
                  name="name"
                  className="form-control mb-3 input-style"
                  placeholder="your name"
                  required
                />
                <input
                  style={{ transform: "scale(1)" }}
                  type="text"
                  name="email"
                  className="form-control mb-3 input-style"
                  placeholder="your email Address"
                  required
                />
                <textarea
                  className="form-control mb-3 input-style"
                  name="message"
                  id=""
                  rows="7"
                  placeholder="write your message"
                  required
                ></textarea>
                <div className="d-flex justify-content-end">
                  <input
                    style={{ zIndex: 1 }}
                    className="btn btn-success"
                    type="submit"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="container" style={{ height: "250px" }}>
              <h6>MANAGER</h6>
              <h4>MARK SMITH</h4>
              <img
                style={{ height: "220px", width: "200px" }}
                className="img-fluid"
                src="http://apartment-html.chart.civ.pl/images/agent3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactForm;