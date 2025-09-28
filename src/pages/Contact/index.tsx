import { FacebookIcon, InstagramIcon, MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import { Main } from "../../components/Main";
import { Title } from "../../components/Title";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./styles.module.css";

export function Contact() {
  return (
    <MainTemplate>
      <Main>
        <section className={styles.contacts}>
          <Title type="card">Contatos</Title>
          <a href="mailto:jc2493718@gmail.com">
            <MailIcon />jc2493718@gmail.com
          </a>
          <a href="tel:+557937173429">
            <PhoneCallIcon /> +557937173429 (ficticio)
          </a>
          <a href="https://www.google.com/maps/search/Algum+lugar/@-20.0306152,-48.9317634,15z">
            <MapIcon />Rua Alguma Rua, Nº50
          </a>
          <div className={styles.socialWrapper}>
            <a href="https://www.instagram.com/juliocesar_amarals">
              <InstagramIcon /> juliocesar_amarals
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572244536159">
              <FacebookIcon /> Júlio César
            </a>
          </div>
        </section>
      </Main>
    </MainTemplate>
  )
}