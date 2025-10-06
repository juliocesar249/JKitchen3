import { memo } from "react";
import style from "./styles.module.css";
export const Footer = memo(() => {
  return <footer className={style.footer}>
    <p>Feito com {"\<"}3 - JKitchen 2025</p>
  </footer>
})