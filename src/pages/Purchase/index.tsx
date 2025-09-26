import { DefaultButton } from "../../components/DefaultButton";
import { Main } from "../../components/Main";
import { PaymentMethod } from "../../components/PaymentMethod";
import { SelectedProducts } from "../../components/SelectedProducts";
import { Title } from "../../components/Title";
import { MainTemplate } from "../../templates/MainTemplate";
import style from "./styles.module.css";

export function Purchase() {
  return (
    <MainTemplate>
      <Main>
        <div className={style.purchaseWrapper}>
          <Title type="card">Concluir pedido</Title>
          <div>
            <PaymentMethod />
            <SelectedProducts />
          </div>
        </div>
      </Main>
    </MainTemplate>
  )
}