import React, { useState } from "react";
import styles from "./contact.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import Notification from "../commons/Notifications";

const ContactForm = () => {
  // const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    // setSubmitted(true);

    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setStatus("success");
        reset();
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  }

  return (
    <div>
      {status === 'success' && <Notification message={"Email sent successfully!"} type="success"/>}
      {status === 'error' && <Notification message={"Error sending email!"} type="error"/>}
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfoItem}>
              Email adresa
              <div className={styles.contactInfoSubitemTwo}>
                tonci.andrijic@gmail.com
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              Broj mobitela (Tonči Andrijić)
              <div className={styles.contactInfoSubitemTwo}>
                +385 98 181 6135
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              Adresa
              <div className={styles.contactInfoSubitemTwo}>
                Zaglav 27, 20271 Blato Croatia
              </div>
            </div>
          </div>
          <section className={styles.contactFormContainer}>
            <h3>Send us an email</h3>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ime i prezime"
                  {...register("name", {
                    required: "You must enter your name",
                    minLength: {
                      value: 3,
                      message: "This is not long enough to be a name",
                    },
                    maxLength: {
                      value: 120,
                      message: "This is too long",
                    },
                    pattern: {
                      value:
                        /^[a-z\u0161\u0111\u010D\u0107\u017E\u00EB\u002D ]*$/gi,
                      message: "Invalid name input",
                    },
                  })}
                />
                <span className={styles.errorMessage}>
                  {errors?.name?.message}
                </span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "You must enter your email address",
                    minLength: {
                      value: 8,
                      message: "This is not long enough to be an email",
                    },
                    maxLength: {
                      value: 120,
                      message: "This is too long",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <span className={styles.errorMessage}>
                  {errors?.email?.message}
                </span>
              </div>
              <div className={styles.textareaContainer}>
                <textarea
                  type="text"
                  cols="60"
                  rows="8"
                  id="description"
                  placeholder="Message"
                  name="message"
                  {...register("message", {
                    required: "You must enter your message",
                    message: "You must enter your message",
                    minLength: {
                      value: 10,
                      message: "This is not long enough to be a message",
                    },
                    maxLength: {
                      value: 3000,
                      message:
                        "Your message can't be longer than 3000 characters",
                    },
                  })}
                />
                <span className={styles.errorMessage}>
                  {errors?.message?.message}
                </span>
              </div>
              <button type="submit" className={styles.sendEmailBtn}>
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
