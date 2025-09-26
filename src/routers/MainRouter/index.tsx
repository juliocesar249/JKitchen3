import { BrowserRouter, Route, Routes } from "react-router";
import { Menu } from "../../pages/Menu";
import { Title } from "../../components/Title";
import { Purchase } from "../../pages/Purchase";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/contact" element={<Title>Informações de contato</Title>} />
        <Route path="*" element={<Title type="card">404 - Página não encontrada!</Title>}/>
      </Routes>
    </BrowserRouter>
  )
}