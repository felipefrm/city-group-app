import Select from 'react-select'

export function MultiSelect({ cities, selectCities, setSelectedCities, ...rest }) {
  const options = cities.map(city => ({
    value: city.id,
    label: `${city.uf} - ${city.name}`
  }))

  return (
    <Select
      isMulti
      placeholder="Selecione as cidades"
      options={options}
      value={selectCities}
      onChange={setSelectedCities}
      isOptionDisabled={() => selectCities.length >= 5}
      {...rest}
    />
  )
}