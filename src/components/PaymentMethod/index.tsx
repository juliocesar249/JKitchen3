import { CreditCardIcon, Wallet2Icon } from "lucide-react";
import { Title } from "../Title";
import style from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";
import { useState } from "react";
import { formatCpf } from "../../utils/formatCpf.ts";
import { RouterLink } from "../RouterLink";
import { isValidCpf } from "../../utils/isValidCpf.ts";

export function PaymentMethod() {
  const [cpf, setCpf] = useState<string>("");
  const [paymentMethodChecked, setPaymentMethodCheked] = useState<boolean>(false);

  function handlePurchase(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(cpf.length === 0) return;
    if(!isValidCpf(cpf)) return;
    window.location.reload();
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
                /></label>
            )}
          </ul>
        </div>
        <DefaultButton type="submit" disabled={!paymentMethodChecked}>Pagar</DefaultButton>
      </form>
    </section>
  )
}