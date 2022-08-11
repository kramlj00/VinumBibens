import React, { useState } from "react";
import styles from "./contact.module.scss";

const ContactForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSenderNameValid, setIsSenderNameValid] = useState(true);
  const [isSenderEmailValid, setIsSenderEmailValid] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showEmailSuccessMessage, setShowEmailSuccessMessage] = useState(false);

  const handleSenderNameChange = (value, setValue, setIsValueValid) => {
    if (/^[a-z\u0161\u0111\u010D\u0107\u017E\u00EB\u002D ]*$/gi.test(value)) {
      setValue(value);
    }
    !value.length || value.length < 3
      ? setIsValueValid(false)
      : setIsValueValid(true);
  };

  const handleEmailChange = (value) => {
    setSenderEmail(value);
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? setIsSenderEmailValid(true)
      : setIsSenderEmailValid(false);
  };

  return (
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
            <div className={styles.contactInfoSubitemTwo}>+385 98 181 6135</div>
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
          <form>
            <input
              type="text"
              value={senderName}
              placeholder="Ime i prezime"
              required
              onChange={(e) =>
                handleSenderNameChange(
                  e.target.value,
                  setSenderName,
                  setIsSenderNameValid
                )
              }
            />
            {!isSenderNameValid && senderName.length ? (
              <p className={styles.errorMessage}>Wrong input</p>
            ) : <></>}
            <input
              type="email"
              value={senderEmail}
              placeholder="Email"
              required
              onChange={(e) =>
                handleEmailChange(
                  e.target.value,
                  setSenderEmail,
                  setIsSenderEmailValid
                )
              }
            />
            {!isSenderEmailValid && senderEmail.length ? (
              <p className={styles.errorMessage}>Wrong input</p>
            ) : <></>}
            <textarea
              type="text"
              cols="60"
              rows="8"
              id="description"
              maxLength={3000}
              placeholder="Poruka"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button type="submit" className={styles.sendEmailBtn}>
              Pošalji
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
