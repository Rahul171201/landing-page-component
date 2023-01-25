import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src="logo.svg" alt="logo"></img>
        </div>
      </div>
      <div className={styles.bodyBox}>
        <div className={styles.leftBox}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="illustration-mockups.svg"
              alt="illustration"
            ></img>
          </div>
        </div>
        <div className={styles.rightBox}>
          <h1 className={styles.descriptionHeader}>
            Build The Community Your Fans Will Love
          </h1>
          <span className={styles.descriptionBody}>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussions!
          </span>
          <div className={styles.buttonContainer}>
            <button className={styles.descriptionButton}>Register</button>
          </div>
          <div className={styles.iconBar}>
            <img
              className={styles.icon}
              src="instagram.svg"
              alt="instagram"
            ></img>
            <img
              className={styles.icon}
              src="facebook.png"
              alt="instagram"
            ></img>
            <img
              className={styles.icon}
              src="twitter.png"
              alt="instagram"
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
}
