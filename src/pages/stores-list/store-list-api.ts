import HttpService from "../../config/http-service.ts"
import {IMoviesList} from "./store-list-interface.ts";


const API_KEY = '4bc7cd24bc3b6660338cc6bdbc2b699c'



const today = new Date();
const oneMonthAgo = new Date(today);
oneMonthAgo.setMonth(today.getMonth() - 1);
const startDate = oneMonthAgo.toISOString().split("T")[0];
const endDate = today.toISOString().split("T")[0];

export const getMoviesList = (page: number) =>
  HttpService.get<IMoviesList>(`3/discover/movie`,
    {
      params: {
        api_key: API_KEY,
        page: page,
        language: "en-US",
        'primary_release_date.gte':startDate,
        'primary_release_date.lte':endDate
      }
    });




export const getSearchMovie = (page: number, query: string) =>
  HttpService.get<Omit<IMoviesList, "dates">>(`3/search/movie`,
    {
      params: {
        api_key: API_KEY,
        page: page,
        language: "en-US",
        query: encodeURIComponent(query),
      }
    });