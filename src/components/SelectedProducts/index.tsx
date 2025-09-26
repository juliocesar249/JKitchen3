import { useDishContext } from "../../contexts/dishContext/useDishContext";
import { formatPrice } from "../../utils/formatPrice";
import { Title } from "../Title";
import style from "./styles.module.css";

export function SelectedProducts() {
  const { dishes, dishesToPurchase } = useDishContext();
  let total = 0
  const dishesToShow = Array.from(dishesToPurchase).map(dishID => {
    const dish = dishes.find(dish => dish.id === dishID);
    total += Number(dish?.price);
    return {id: dish?.id, name: dish?.name, price: dish?.price}
  });

  return (
    <section className={style.tableWrapper}>
      <Title type="card">Produtos</Title>
      <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dishesToShow.map(dish => {
              return (
                <tr key={dish.id}>
                  <td>{dish.name}</td>
                  <td>{formatPrice(Number(dish.price))}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{formatPrice(total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}