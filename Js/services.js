const API_KEY = 'a801df85d19f1f04d46de67528171ac9';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

//trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw `Что-то пошло не так ${response.status}`
  })
   
  .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page${page}`;
    return await getData(url);
}