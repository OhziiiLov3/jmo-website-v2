import React, { useRef, useState } from "react";  
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
const [successMessage, setSuccessMessage] = useState("");
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const form = useRef();
const serviceID = "service_ID";
const templateID = "JMOtemplate_ID";
const userID = "user_yd0HoddbkToxCxmJDWBi6";

const onSubmit = (data, r) => {
  sendEmail(
    serviceID,
    templateID,
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.message,
      description: data.description,
    },
    userID
  );
  r.target.reset();
};

const sendEmail = (serviceID, templateID, variables, userID) => {
  emailjs
    .send(serviceID, templateID, variables, userID)
    .then(() => {
      setSuccessMessage("Message Sent successfully!");
    })
    .catch((err) => console.error(`Something went wrong ${err}`));
};

   

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <span className="line"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span className="success-message">{successMessage}</span>
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <input
              id="name"
              type="text"
              className="contact-input"
              placeholder="Name"
              name="name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters",
                },
              })}
            />
            <input
              id="email"
              type="email"
              className="contact-input"
              placeholder="Email"
              name="email"
              ria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Please provide you email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid Email",
                },
              })}
            />

            <input
              id="phone"
              text="text"
              className="contact-input"
              placeholder="Phone Number"
              name="phone"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", {
                required: "Please enter your phone number",
              })}
            />
            <textarea
              row="6"
              id="description"
              text="text"
              className="textarea"
              placeholder="What are your goals?!"
              name="description"
              aria-invalid={errors.description ? "true" : "false"}
              {...register("description", {
                required: "Please leave a detailed message...",
              })}
            />
            <button className="button">Contact</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact