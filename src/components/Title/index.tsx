import style from './styles.module.css';
import React from 'react';

type TituloProps = {
  children: React.ReactNode;
  type?: "main" | "card";
}

export function Title({children, type = "main"}: TituloProps) {
  return <h1 className={type === "main" ? style.titleMain : style.titleCard}>{children}</h1>
}