import style from "./styles.module.css";

type Main = {
  children: React.ReactNode
}

export function Main({children}: Main) {
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}