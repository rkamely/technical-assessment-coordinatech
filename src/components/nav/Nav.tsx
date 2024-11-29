import {useEffect} from "react";
import {useLocation} from "react-router-dom";


const Nav = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      setTimeout(() => {
        el && el.scrollIntoView();
      }, 0);
    } else {
      scrollTo(0, 0)
    }
  }, [location, location.hash])

  return (
    <nav
      className={`fixed max-w-[1440px] flex bg-white w-full justify-between items-center px-4 md:px-10 xl:px-[200px] py-5 shadow-nav z-30 scroll-smooth`}>
      The Best Website For Searching Movies
    </nav>
  )
}
export default Nav