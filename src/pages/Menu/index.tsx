import { Card } from "../../components/Card";
import style from "./styles.module.css";
import { useDishContext } from "../../contexts/dishContext/useDishContext";
import { useNavigate } from "react-router";
import { MainTemplate } from "../../templates/MainTemplate";
import { Main } from "../../components/Main";

export function Menu() {
  const { dishes, dishesToPurchase, setDishesToPurchase } = useDishContext();
  const navigate = useNavigate();

  function toggleBuyProduct(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
    if ("checked" in e.target) {
      const id = (e.target as HTMLInputElement).id;
      if (dishesToPurchase.has(id)) {
        setDishesToPurchase(prev => {
          const newDishesToPurchase = new Set(prev);
          newDishesToPurchase.delete(id);
          return newDishesToPurchase;
        })
        return;
      };

      setDishesToPurchase(prev => new Set(prev).add(id));
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); navigate("/purchase"); }

  return (
    <MainTemplate>
      <Main>
        <form action="#" onSubmit={handleSubmit} className={style.form}>

          <div className={style.products}>
            {dishes.map(dish =>
            <Card
              key={dish.id}
              imageUrl={dish.imageSource || "https://placehold.co/1920x1080"}
              title={dish.name}
              price={dish.price}
              id={dish.id}
              checked={dishesToPurchase.has(dish.id)}
              onClick={toggleBuyProduct}
            />)}
          </div>

          <button type="submit" className={style.button}>Finalizar {dishesToPurchase.size}</button>
        </form>
      </Main>
    </MainTemplate>
  )
}