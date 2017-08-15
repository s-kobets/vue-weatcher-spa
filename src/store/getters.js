export const listCitys = function (state) {
  return state.list.map((city) => {
    return city.name;
  });
};
