import { memo } from "react";
import style from "./styles.module.css";
type DefaultButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<"button">

export const DefaultButton = memo(({children, ...props}: DefaultButtonProps) => {
  return <button className={style.button} {...props}>{children}</button>
})