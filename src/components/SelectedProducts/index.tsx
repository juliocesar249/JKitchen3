import { Title } from "../Title";
import style from "./styles.module.css";

export function SelectedProducts() {
  return (
    <section>
      <Title type="card">Produtos</Title>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>16,00</td>
            </tr>
            <tr>
              <td>Nome</td>
              <td>16,00</td>
            </tr>
            <tr>
              <td>Nome</td>
              <td>16,00</td>
            </tr>
            <tr>
              <td>Nome</td>
              <td>16,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>R$64,00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}