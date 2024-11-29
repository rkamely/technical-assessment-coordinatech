import {useEffect, useState} from 'react';

type IProps =
  "(max-width: 600px)"
  | "(min-width: 601px) and (max-width: 960px)"
  | "(max-width: 960px)"
  | "(min-width: 961px)"
  | "(min-width: 600px)"


const useMediaQuery = (query: IProps) => {

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Listen for changes to the media query
    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      // Clean up the event listener on unmount
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;