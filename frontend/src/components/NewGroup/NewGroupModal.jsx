import { Modal, TextInput, Label, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { MultiSelect } from "./MultiSelect";

import api from "../../services/api";
import { useGroups } from "../../contexts/groups";

export function NewGroupModal({ isOpen, closeModal }) {
  const { refetch } = useGroups()

  const [cities, setCities] = useState([])
  const [groupName, setGroupName] = useState('')
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    if (isOpen) {
      api.get('city')
        .then(response => setCities(response.data))
        .catch(err => console.log(err.message))
    }
  }, [isOpen])

  async function handleSubmit() {
    if (groupName === '') {
      console.log('nao pode ser vazio')
      return
    }

    if (selectedCities.length === 0) {
      console.log('nao pode ser vazio')
    }

    if (selectedCities.length > 5) {
      console.log('nao pode ser maior que cinco')
    }

    const citiesId = selectedCities.map(city => city.value);

    await api.post('group', { name: groupName, cities: citiesId })
      .then(response => refetch())
      .catch(err => console.log(err.message))


    closeModal()
  }

  return (
    <Modal
      show={isOpen}
      size="md"
      popup={true}
      onClose={closeModal}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Cadastrar novo grupo
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
      </Modal.Body>
      <div className="flex gap-2 justify-end">
        <Modal.Footer>
          <Button onClick={closeModal} color="gray">Cancelar</Button>
          <Button onClick={handleSubmit}>Cadastrar</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}