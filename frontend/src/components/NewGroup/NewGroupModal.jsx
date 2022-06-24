import { Modal, TextInput, Label, Button } from "flowbite-react";
import { useState } from "react";
import { MultiSelect } from "./MultiSelect";

export function NewGroupModal({ isOpen, closeModal }) {
  const [selectedCities, setSelectedCities] = useState([]);

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
              selectCities={selectedCities}
              setSelectedCities={setSelectedCities}
            />
          </div>
        </div>
      </Modal.Body>
      <div className="flex gap-2 justify-end">
        <Modal.Footer>
          <Button onClick={closeModal} color="gray">Cancelar</Button>
          <Button>Cadastrar</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}