import * as types from './mutation-types';
import { convertToPressure, convertToCelsius } from '../assets/utils';

export const addCity = ({ commit }, payload) => {
  const { city } = payload;
  payload.city.weather[0].icon = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
  payload.city.main.temp = convertToCelsius(city.main.temp);
  payload.city.main.pressure = convertToPressure(city.main.pressure);

  commit(types.ADD_CITY, payload);
};

export const removeCity = ({ commit }, payload) => {
  commit(types.REMOVE_CITY, payload);
}
;