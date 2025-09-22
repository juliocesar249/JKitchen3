import style from "./styles.module.css";

export function NavBar() {
  return (
    <nav className={style.nav}>
      <div className={style.linksWrapper}>
        <a href="#" className={style.linkSelected}>Cardápio</a>
        <a href="#">Contato</a>
      </div>
    </nav>
  )
}