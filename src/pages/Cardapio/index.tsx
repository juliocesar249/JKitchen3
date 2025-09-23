import {Card} from "../../components/Card";
import style from "./styles.module.css";
export function Cardapio() {
  return (
    <form action="#" className={style.form}>
      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Arroz"
        price={12}
      />

      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Feijão"
        price={16}
      />

      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Carne"
        price={20}
      />
      
      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Arroz"
        price={12}
      />

      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Feijão"
        price={16}
      />

      <Card
        imageUrl="https://placehold.co/1920x1080"
        title="Carne"
        price={20}
      />

      <button type="button" className={style.button}>Finalizar</button>
    </form>
  )
}