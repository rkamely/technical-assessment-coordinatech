import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import NotFound from "../pages/not-found/NotFound.tsx";
import AppLayout from "../components/app-layout/AppLayout.tsx";
import appRoutes from "./app-routes.ts";

const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        {Boolean(appRoutes && Array.isArray(appRoutes)) &&
          appRoutes.map((item, index) => {
            const {component: Component, path} = item;
            return (
              <Route
                key={`route-${index}`}
                path={path}
                element={<Suspense fallback={'Loading...'}>
                  <Component/>
                </Suspense>}
              />);
          })}
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
    ;
};

export default AppRouter;
