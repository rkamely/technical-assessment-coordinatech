import {ContainerRoute} from "./router.type.ts";
import StoresList from "../pages/stores-list/StoresList.tsx";


const appRoutes: ContainerRoute[] = [
  {
    path: "/",
    component: StoresList,
  },
];

export default appRoutes;
