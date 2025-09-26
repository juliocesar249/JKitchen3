import style from './styles.module.css';
import React from 'react';

type TituloProps = {
  children: React.ReactNode;
  type?: "main" | "card";
} & React.HTMLAttributes<HTMLHeadElement>;

export function Title({children, type = "main", ...props}: TituloProps) {
  return <h1 className={type === "main" ? style.titleMain : style.titleCard} {...props}>{children}</h1>
}