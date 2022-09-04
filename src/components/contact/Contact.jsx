import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import phone from "../../Images/phone.jpg";
import email from "../../Images/email.png";
import loc from "../../Images/loc.png";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [Done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erlcg4e",
        "template_cgqobkw",
        formRef.current,
        "LIacUmRsxATR7FHxa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src={phone}
                alt=""
                className="c-icon"
                style={{ borderRadius: "5px" }}
              />
              +91 705*******
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />{" "}
              Sahilpillania0001@gmail.com
            </div>
            <div className="c-info-item">
              <img src={loc} alt="" className="c-icon" /> Jind, Haryana(126102)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            If you want to contact me. You can also send me the message through
            given below form. 🤵‍♂️
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="user_msg"
              rows="5"
              placeholder="Message ..."
              required
            />
            <button>Submit</button>
            {Done && <span className="formDone"> Thank You for message. </span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
