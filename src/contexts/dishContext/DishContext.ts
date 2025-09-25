import React, { createContext } from "react";
import type { DishModel } from "../../models/DishModel";

export type DishContextProps = {
  dishes: DishModel[];
  setDishes: React.Dispatch<React.SetStateAction<DishModel[]>>;
  dishesToPurchase: Set<string>;
  setDishesToPurchase: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const initialValue = {
  dishes: [],
  setDishes: () => {},
  dishesToPurchase: new Set<string>(),
  setDishesToPurchase: () => {}
}

export const DishContext = createContext<DishContextProps>(initialValue);