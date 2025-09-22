import { ChefHatIcon } from "lucide-react";
import { Title } from "../Title";
import style from "./styles.module.css";
import { NavBar } from "../NavBar";

export function Header() {
  return (
    <header className={style.header}>
      <Title type="main">JKitchen<ChefHatIcon size={116}/></Title>
      <NavBar/>
    </header>
  )
}