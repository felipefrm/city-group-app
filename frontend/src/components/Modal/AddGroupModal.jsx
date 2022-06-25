import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import toast from 'react-hot-toast';

import { FormGroup } from "./FormGroup";
import api from "../../services/api";
import { useGroups } from "../../contexts/groups";

export function AddGroupModal({ isOpen, closeModal }) {
  const { refetch } = useGroups()

  const [groupName, setGroupName] = useState('')
  const [selectedCities, setSelectedCities] = useState([]);

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

    await api.post('group', { name: groupName, cities: citiesId })
      .then(response => {
        refetch()
        toast.success('Grupo cadastrado com sucesso!')
      })
      .catch(err => toast.error('Houve uma falha ao cadastrar o grupo!'))


    resetForm()
    closeModal()
  }

  function resetForm() {
    setGroupName('');
    setSelectedCities([]);
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
        <FormGroup
          action="add"
          groupName={groupName}
          setGroupName={setGroupName}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />
      </Modal.Body>
      <div className="flex gap-2 justify-end">
        <Modal.Footer>
          <Button onClick={closeModal} color="gray">Cancelar</Button>
          <Button onClick={handleSubmit} color="warning">Cadastrar</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}