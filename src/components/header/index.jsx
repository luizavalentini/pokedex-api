import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../HeaderLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      menu.current.className = styles.closed;
    } else {
      menu.current.className = styles.open;
    }
  };

  useEffect(() => {
    menu.current.className = styles.closed;
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.current.className = styles.closed;
        setOpen(false);
      });
    });
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.teste}>
          <img className={styles.logo} src={logo} alt="logo" />
          <nav className={styles.nav} ref={menu}>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/PokeDex">Pokédex</HeaderLink>
            <HeaderLink to="/Legendaries">Legendaries</HeaderLink>
          </nav>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            {open ? "⤫" : "☰"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
