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
  function handleImageNotFound(e:React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement;
    target.src = "/images/imageNotFound.webp";
  }

  return (
    <label {...props}>
      <article className={style.card} id={id}>
        <section className={style.cardImage}>
          <img onError={handleImageNotFound} src={imageUrl} alt="Foto ilustrativa do prato" />
          <div className={style.cardDescription}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi corporis ea quibusdam praesentium ducimus placeat sit architecto, harum velit!</p>
          </div>
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