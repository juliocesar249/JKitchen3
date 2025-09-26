import { useNavigate } from "react-router";
import { Main } from "../../components/Main";
import { PaymentMethod } from "../../components/PaymentMethod";
import { SelectedProducts } from "../../components/SelectedProducts";
import { Title } from "../../components/Title";
import { useDishContext } from "../../contexts/dishContext/useDishContext";
import { MainTemplate } from "../../templates/MainTemplate";
import style from "./styles.module.css";
import { useEffect } from "react";

export function Purchase() {
  const {dishesToPurchase} = useDishContext();
  const navigate = useNavigate()

  useEffect(() => {
    if(dishesToPurchase.size === 0) navigate("/");
  },[]);

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