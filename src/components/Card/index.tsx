import style from "./styles.module.css";

type CardProps = {
  imageUrl: string;
  title: string;
  price: number
}

export function Card({ imageUrl, title, price }: CardProps) {
  return (
    <label>
      <article className={style.card}>
        <section className={style.cardImage}>
          <img src={imageUrl} alt="Foto ilustrativa do prato" width="100%" />
        </section>
        <section className={style.cardInfo} >
          <p>{title}</p>
          <p>R${price}</p>
          <input type="checkbox" name="comprar" />
        </section>
      </article>
    </label>
  )
}