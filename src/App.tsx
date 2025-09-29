import "./assets/css/reset.css";
import "./assets/css/theme.css";
import "./assets/css/global.css";
import { DishContextProvider } from "./contexts/dishContext/DishContextProvider";
import { MainRouter } from "./routers/MainRouter";
import { MessagesContainer } from "./components/MessagesContainer";
export function App() {
  return (
    <DishContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </DishContextProvider>
  );
}