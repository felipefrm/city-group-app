import Select from 'react-select'
import { convertCityToSelectOption } from '../../utils'

export function MultiSelect({ cities, selectCities, setSelectedCities, ...rest }) {
  const options = cities.map(convertCityToSelectOption)

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