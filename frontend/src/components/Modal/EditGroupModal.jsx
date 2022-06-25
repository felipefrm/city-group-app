import { Modal, TextInput, Label, Button } from "flowbite-react";
import { useState } from "react";

import { MultiSelect } from "./MultiSelect";

import api from "../../services/api";
import { useGroups } from "../../contexts/groups";
import { useCity } from "../hooks/useCity";
import toast from "react-hot-toast";

export function EditGroupModal({ isOpen, closeModal, group }) {
  const { refetch } = useGroups()
  const cities = useCity(isOpen)

  const [groupName, setGroupName] = useState(group.name)
  const [selectedCities, setSelectedCities] = useState(
    group.cities.map(city => ({
      value: city.id,
      label: `${city.uf} - ${city.name}`
    }))
  );

  async function handleSubmit() {
    if (groupName === '') {
      toast.error('Informe o nome do grupo.')
      return
    }

    if (selectedCities.length === 0) {
      toast.error('Nenhuma cidade selecionada.')
      return
    }

    if (selectedCities.length > 5) {
      toast.error('Limite de 5 cidades excedido.')
      return
    }

    const citiesId = selectedCities.map(city => city.value);

    await api.put(`group/${group.id}`, { name: groupName, cities: citiesId })
      .then(response => {
        refetch()
        toast.success('Grupo editado com sucesso!')
      })
      .catch(err => toast.error('Houve uma falha ao editar o grupo!'))

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
            Editar grupo
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
          <Button onClick={handleSubmit}>Editar</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}