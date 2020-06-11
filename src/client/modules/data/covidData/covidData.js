import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const COVIDURL = 'https://covid19.mathdro.id/api/countries/';
const API_KEY = 'b6b19cd00d7869f6c6001640653def91';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
};
export const fethcCovidData = async (query) => {
    const { data } = await axios.get(COVIDURL + query);
    return data;
};
