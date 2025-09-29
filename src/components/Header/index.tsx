import { ChefHatIcon } from "lucide-react";
import { Title } from "../Title";
import style from "./styles.module.css";
import { NavBar } from "../NavBar";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export function Header() {
  const windowWidth = useWindowWidth() * 0.8;
  const iconSize = Math.min(Math.max(0.2 * windowWidth, 70), 100);
  
  return (
    <header className={style.header}>
      <Title type="main">JKitchen<ChefHatIcon size={iconSize}/></Title>
      <NavBar/>
    </header>
  )
}