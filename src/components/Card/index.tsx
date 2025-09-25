import { formatPrice } from "../../utils/formatPrice";
import style from "./styles.module.css";

type CardProps = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  checked: boolean;
} & React.ComponentProps<'label'>

export function Card({ imageUrl, title, price, id, checked, ...props }: CardProps) {
  return (
    <label {...props}>
      <article className={style.card} id={id}>
        <section className={style.cardImage}>
          <img src={imageUrl} alt="Foto ilustrativa do prato" />
        </section>
        <section className={style.cardInfo} >
          <p>{title}</p>
          <p>{formatPrice(price)}</p>
          <input defaultChecked={checked} type="checkbox" name={title.toLowerCase()} id={id}/>
        </section>
      </article>
    </label>
  )
}