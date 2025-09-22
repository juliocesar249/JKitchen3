import "./assets/css/reset.css";
import "./assets/css/theme.css";
import "./assets/css/global.css";
import { Cardapio } from "./pages/Cardapio";
import { MainTemplate } from "./templates/MainTemplate";
import { Main } from "./components/Main";
export function App() {
  return (
    <>
      <MainTemplate>
        <Main>
          <Cardapio/>
        </Main>
      </MainTemplate>
    </>
  )
}