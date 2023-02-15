import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };
  const logText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logText}>CoderHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
