import { CreditCardIcon, Wallet2Icon } from "lucide-react";
import { Title } from "../Title";
import style from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";
import { useState } from "react";
import { formatCpf } from "../../utils/formatCpf.ts";
import { isValidCpf } from "../../utils/isValidCpf.ts";
import { useDishContext } from "../../contexts/dishContext/useDishContext.ts";
import { useNavigate } from "react-router";
import { showMessage } from "../../adapters/showMessages.ts";

export function PaymentMethod() {
  const [cpf, setCpf] = useState<string>("");
  const [paymentMethodChecked, setPaymentMethodCheked] = useState<boolean>(false);
  const { setDishesToPurchase } = useDishContext();
  const navigate = useNavigate();

  function handlePurchase(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    if (!paymentMethodChecked) {
      showMessage.error("Selecione o método de pagamento!");
      return;
    }
    if (cpf.length === 0) {
      showMessage.error("Digite seu CPF!");
      return
    };
    if (!isValidCpf(cpf)) {
      showMessage.error("CPF inválido!");
      return;
    };
    setDishesToPurchase(() => new Set());
    showMessage.sucess("Compra realizada com sucesso!");
    setTimeout(() => showMessage.info("Seu pedido será entregue em breve!"), 2000);
    navigate("/");
  }

  return (
    <section>
      <form action="#" onSubmit={handlePurchase} className={style.form} id="paymentMethods">
        <div className={style.methodsWrapper}>
          <Title style={{ marginTop: "1rem" }} type="card">Forma de pagamento</Title>
          <ul className={style.methods}>
            <li>
              <label>
                <input onChange={() => setPaymentMethodCheked(true)} className="checkbox" type="radio" name="payment" />
                <p><CreditCardIcon />Cartão de crédito</p>
              </label>
            </li>
            <li>
              <label>
                <input onChange={() => setPaymentMethodCheked(true)} className="checkbox" type="radio" name="payment" />
                <p><Wallet2Icon />Cartão de débito</p>
              </label>
            </li>
            <li>
              <label>
                <input onChange={() => setPaymentMethodCheked(true)} className="checkbox" type="radio" name="payment" />
                <p>
                  <span className={style.pixIcon}></span>
                  Pix
                </p>
              </label>
            </li>
            {paymentMethodChecked && (
              <label>CPF:
                <input type="text"
                  onBlur={e => setCpf(formatCpf(e.target.value))}
                  onChange={e => setCpf(e.target.value)}
                  value={cpf}
                  maxLength={14}
                  placeholder="ex: xxx.xxx.xxx-xx"
                  name="cpf"
                /></label>
            )}
          </ul>
        </div>
        <DefaultButton type="submit" disabled={!paymentMethodChecked}>Pagar</DefaultButton>
      </form>
    </section>
  )
}