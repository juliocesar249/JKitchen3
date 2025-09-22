import { ChefHatIcon } from "lucide-react";
import { Titulo } from "../Titulo";
import style from "./styles.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <Titulo type="main">JKitchen<ChefHatIcon size={116}/></Titulo>
    </header>
  )
}