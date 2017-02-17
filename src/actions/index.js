const API_KEY = "c17952051bc188056b3128e030109343";
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;
const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}