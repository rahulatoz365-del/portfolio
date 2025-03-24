import React from 'react'
import './contact.css'
import toast from 'react-hot-toast';
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e478c583-70be-4cae-bee9-2cfd21d75a6e");
    

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Message sent successfully");
    }
    else{
      toast.error("Message failed to send");
    }
  };
  return (
    <section className="contact section" id="contact">
      <h2 >Get in touch</h2>
      <br />
      <p className="contact__description">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <br />
      <div className="contact__container bd-grid">
        <form className="contact__form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" className="contact__input" />
          <input type="email" name="email" placeholder="Email" className="contact__input" />
          <textarea name="message" id="" cols="0" rows="10" placeholder="Message" className="contact__input"></textarea>
          <button className="contact__button btn primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
