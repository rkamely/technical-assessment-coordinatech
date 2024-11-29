import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import Nav from "../nav/Nav.tsx";
import Footer from "../footer/Footer.tsx";

const AppLayout = () => {

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div className={`min-h-[100vh] max-w-[1440px] mx-auto w-full overflow-x-hidden`}>
      <Nav/>
      <Outlet context={{isLoading: 'isLoading && !globalData'}}/>
      <Footer/>
    </div>
  );
};
export default AppLayout;
