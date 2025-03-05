import React from "react";

const Contact = () => {

  const handleFormSubmit = (formData) =>{
    console.log(formData.entries());
    
    const formValues = Object.fromEntries(formData.entries())
    console.log(formValues);
    
  }
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              autoComplete="false"
              placeholder="Enter your name"
              name="username"
              required
            />
            <input
              type="text"
              className="form-control"
              autoComplete="false"
              placeholder="Enter your e-mail"
              name="email"
              required
            />
            <textarea
              type="text"
              className="form-control"
              rows="10"
              autoComplete="false"
              placeholder="Enter your message"
              name="message"
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
