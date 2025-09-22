import { ChefHatIcon } from "lucide-react";
import { Title } from "../Title";
import style from "./styles.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <Title type="main">JKitchen<ChefHatIcon size={116}/></Title>
    </header>
  )
}