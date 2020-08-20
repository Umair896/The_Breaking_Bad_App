import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>The Breaking Bad API</h1>
        <h5>...Tread Lightly</h5>
        <h4>Now with Better Call Saul Data!</h4>
      </div>
    );
  }
}

export default Header;
