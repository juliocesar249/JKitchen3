import style from "./styles.module.css";
type DefaultButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<"button">

export function DefaultButton({children, ...props}: DefaultButtonProps) {
  return <button className={style.button} {...props}>{children}</button>
}