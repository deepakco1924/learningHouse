import React from "react";
import styles from "./Button.module.css";
const Button = ({ content, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{content}</span>
      <img className={styles.arrow} src="/images/arrow-forward.png" alt="" />
    </button>
  );
};

export default Button;
