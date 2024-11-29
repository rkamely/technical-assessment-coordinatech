import StoreCard from "./components/store-card/StoreCard.tsx";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getMoviesList, getSearchMovie} from "./store-list-api.ts";
import Pagination from "../../ui-components/pagination/Pagination.tsx";
import TextField from "../../ui-components/textField/TextField.tsx";

const StoresList = () => {
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>(""); // Debounced value

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1)
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const {
    data: moviesData,
    isFetching: moviesDataLoading,
    isError: moviesDataError
  } = useQuery(["getMoviesList", page, debouncedSearch === ''],
    () => getMoviesList(page).then((res) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return res;
    }),
    {
      keepPreviousData: true,
      enabled: !debouncedSearch
    });

  const moviesList = moviesData?.data?.results


  const {
    data: searchMoviesData,
    isFetching: searchDataLoading,
    isError: searchDataError
  } = useQuery(["getSearchMovie", page, debouncedSearch],
    () => getSearchMovie(page, debouncedSearch).then((res) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return res;
    }),
    {
      keepPreviousData: true,
      enabled: !!debouncedSearch
    });
  const searchMovies = searchMoviesData?.data?.results

  const showingList = debouncedSearch ? searchMovies : moviesList
  const totalPage = debouncedSearch ? searchMoviesData?.data?.total_pages : moviesData?.data?.total_pages

  if (moviesDataError || searchDataError) return <div>We have some problems please try again</div>;

  return (
    <main className={`max-w-[1440px]  mx-auto w-full overflow-x-hidden `}>
      <section className={`max-w-[1040px] mx-auto w-[95%] lg:w-full mt-[100px]`}>
        <TextField label={'Search Title Movie'} bgColor={'#FFFFFF'} borderColor={`#909090`} textValueColor={`#56596A`}
                   onChange={(e) => setSearch(e.target.value)}
                   clearHandler={() => setSearch('')}/>
      </section>
      {searchDataLoading || moviesDataLoading ?
        <div className={`max-w-[1040px] mx-auto w-[95%] lg:w-full`}>Loading...</div> :
        <section
          className={`flex items-start gap-10 mt-6 md:mt-16 mb-20 md:mb-32 w-[95%] lg:w-full max-w-[1040px] mx-auto `}>
          <div className={`flex flex-col w-[90%] mx-auto md:w-full`}>
            <div className={`grid grid-cols-1 lg:grid-cols-3 w-full gap-8 content-start`}>
              {showingList?.map((item) => (
                <StoreCard movie={item} key={item?.id}/>
              ))}
            </div>
            {totalPage && totalPage > 1 && <div className={`mt-16`}>
              <Pagination page={page} maxPage={totalPage} setPage={(e) => setPage(e)}/>
            </div>}
          </div>
        </section>
      }

    </main>
  );
};
export default StoresList;
