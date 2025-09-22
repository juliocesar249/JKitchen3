import { Titulo } from "../Titulo";
import style from "./styles.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <Titulo/>
    </header>
  )
}