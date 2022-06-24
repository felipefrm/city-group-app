import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export function MultiSelect({ selectCities, setSelectedCities, ...rest }) {
  console.log(selectCities)

  return (
    <Select
      isMulti
      placeholder="Selecione as cidades"
      options={options}
      value={selectCities}
      onChange={setSelectedCities}
      isOptionDisabled={() => selectCities.length >= 2}
      {...rest}
    />
  )
}