import { BadgeAlertIcon } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import style from "./styles.module.css";

type CardProps = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  checked: boolean;
  description?: string;
} & React.ComponentProps<'label'>

export function Card({ imageUrl, title, price, id, checked, description = "", ...props }: CardProps) {
  function handleImageNotFound(e:React.SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.target as HTMLImageElement;
    target.src = "/images/imageNotFound.webp";
  }

  // if(description.length === 0) description = `Este produto não possui descrição :(`;

  return (
    <label {...props}>
      <article className={style.card} id={id}>
        <section className={style.cardImage}>
          <img onError={handleImageNotFound} src={imageUrl} alt="Foto ilustrativa do prato" />
          <div className={style.cardDescription}>
            <p>
              {description.length === 0 ? <><span><BadgeAlertIcon/></span>Este produto não possui descrição :(</> : description}
            </p>
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