import { Label, TextInput } from "flowbite-react";
import { MultiSelect } from "./MultiSelect";
import { useCity } from "../hooks/useCity";

export function FormGroup({
  action,
  groupName,
  setGroupName,
  selectedCities,
  setSelectedCities,
 }) {
  const cities = useCity()

  return (
    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        {action === 'add' ? 'Cadastrar novo grupo' : 'Editar grupo'}
      </h3>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Nome"
          />
        </div>
        <TextInput
          id="name"
          placeholder="Informe o nome do grupo"
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="cities"
            value="Cidades"
          />
        </div>
        <MultiSelect
          id="cities"
          cities={cities}
          selectCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />
      </div>
    </div>
  )
}