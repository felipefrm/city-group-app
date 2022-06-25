export function convertCityToSelectOption(city) {
  return {
    value: city.id,
    label: `${city.name} - ${city.uf}`
  }
}