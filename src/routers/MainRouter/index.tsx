import { BrowserRouter, Route, Routes } from "react-router";
import { Menu } from "../../pages/Menu";
import { Title } from "../../components/Title";
import { Purchase } from "../../pages/Purchase";
import { Contact } from "../../pages/Contact";

export function MainRouter() {
  return (
    <BrowserRouter basename="/Jkitchen3">
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Title type="card">404 - Página não encontrada!</Title>}/>
      </Routes>
    </BrowserRouter>
  )
}