const devUrl = "https://api.themoviedb.org/";
const productionUrl = "https://api.themoviedb.org/";

export const isTestServer =
  window.location.href.search("develop") >= 0 ||
  window.location.href.search("release") >= 0 ||
  window.location.href.search("webengage") >= 0 ||
  window.location.href.search("localhost") >= 0;

export const BaseUrl = !isTestServer ? productionUrl : devUrl;

export const ImageBaseUrl='https://image.tmdb.org/t/p/'
