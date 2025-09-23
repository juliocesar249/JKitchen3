import { MoonIcon } from "lucide-react";
import style from "./styles.module.css";
import { useEffect, useState } from "react";

type AllowedThemes = "dark" | "light"

export function NavBar() {
  const [theme, setTheme] = useState<AllowedThemes>(() => {
    const storagedTheme = localStorage.getItem("theme") as AllowedThemes || "light";
    return storagedTheme;
  });

  function changeTheme() {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <nav className={style.nav}>
      <div className={style.linksWrapper}>
        <a href="#" title="Cardápio" aria-label="Cardápio de items para montar o prato" className={style.linkSelected}>Cardápio</a>
        <a href="#" title="Contato" aria-label="Informações de contato">Contato</a>
        <a href="#" onClick={changeTheme} title="Tema" aria-label="Alternear entre tema claro e escuro"><MoonIcon size={40}/></a>
      </div>
    </nav>
  )
}