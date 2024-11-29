import {useEffect} from "react";

const NotFound = () => {

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <main className={`max-w-[1440px] mx-auto w-full overflow-x-hidden `}>
      NotFound
    </main>
  );
};
export default NotFound;
