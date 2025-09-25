import type React from "react";
import { DishContext} from "./DishContext";
import { useEffect, useState } from "react";
import { initialDishState } from "./initialDishState";
import type { DishModel } from "../../models/DishModel";

type DishContextProviderProps = {
  children: React.ReactNode
}

export function DishContextProvider({children}:DishContextProviderProps) {
  const [dishes, setDishes] = useState<DishModel[]>(initialDishState);
  const [dishesToPurchase, setDishesToPurchase] = useState<Set<string>>(new Set());

  useEffect(() => console.log(dishesToPurchase), [dishesToPurchase]);

  return (
    <DishContext.Provider value={{dishes, setDishes, dishesToPurchase, setDishesToPurchase}}>
      {children}
    </DishContext.Provider>
  )
}