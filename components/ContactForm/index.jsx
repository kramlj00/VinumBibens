import React from "react";
import styles from "./contact.module.scss";

const ContactForm = () => {
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
              //  value={senderName}
              placeholder="Ime i prezime"
              required
              //  onChange={(e) =>
              //    handlesenderNameChange(
              //      e.target.value,
              //      setSenderName,
              //      setIsSenderNameValid
              //    )
              //  }
            />
            <input
              type="text"
              //   value={senderEmail}
              placeholder="Email"
              required
              //   onChange={(e) =>
              //     handleEmailChange(
              //       e.target.value,
              //       setSenderEmail,
              //       setIsSenderEmailValid
              //     )
              //   }
            />
            <textarea
              type="text"
              cols="60"
              rows="8"
              id="description"
              maxLength={3000}
              //   minLength={10}
              placeholder="Poruka"
              // value={message}
              // onChange={(e) => {
              //   setMessage(e.target.value);
              // }}
            />
            <button type="submit" className={styles.sendEmailBtn}>Pošalji</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
