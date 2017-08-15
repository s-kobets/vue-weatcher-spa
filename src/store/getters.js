export const listCitys = function (state) {
  return state.list.map(city => city.name);
};
