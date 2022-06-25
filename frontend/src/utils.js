export function convertCityToSelectOption(city) {
  return {
    value: city.id,
    label: `${city.uf} - ${city.name}`
  }
}