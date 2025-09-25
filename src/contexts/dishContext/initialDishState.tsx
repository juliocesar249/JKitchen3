import type { DishModel } from "../../models/DishModel";
import {v4 as uuid} from "uuid";

export const initialDishState: DishModel[] = [
  {
    name: "Arroz",
    imageSource: "https://s2-casavogue.glbimg.com/21oZC53MVQtTPdvksIaCWBmxE8A=/0x0:2121x1414/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2025/P/8/RVqPh4QUexgkASg4XIBw/arroz-soltinho-01.jpg",
    id: uuid(),
    price: 5
  },
  {
    name: "Feijão",
    imageSource: "https://cdn.pixabay.com/photo/2014/05/28/15/34/pinto-beans-356622_1280.jpg",
    id: uuid(),
    price: 8
  },
  {
    name: "Carne",
    imageSource: "https://pixabay.com/get/ge6d05f3b8937873b673b8fe85453ecdc339fadcb5d722227a6571395ba21181a041613691c05e37dbc39e193076251c52db80b34af05009d916b9f68925e5444_1920.jpg",
    id: uuid(),
    price: 2
  },
  {
    name: "Linguiça",
    imageSource: "https://pixabay.com/get/gc48d4663d946135068c57dced46399cff1c028a1a164e9c503fe8239dd02f536ae74bc032f4b4b44c4da4a3af428d60606c656084d45dcf1f6fa008dd1b8230a_1920.jpg",
    id: uuid(),
    price: 1
  },
  {
    name: "Lasanha",
    imageSource: "https://cdn.pixabay.com/photo/2024/05/09/10/23/ai-generated-8750450_960_720.png",
    id: uuid(),
    price: 7
  },
  {
    name: "Macarrão",
    imageSource: "https://cdn.pixabay.com/photo/2024/08/01/19/25/ai-generated-8938050_960_720.jpg",
    id: uuid(),
    price: 6
  }
]