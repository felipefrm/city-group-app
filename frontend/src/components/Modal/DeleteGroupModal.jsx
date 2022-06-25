import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export function DeleteGroupModal({ isOpen, closeModal, handleDeleteGroup }) {
  return (
    <Modal
      show={isOpen}
      size="md"
      popup={true}
      onClose={closeModal}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Tem certeza que deseja deletar este grupo?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={handleDeleteGroup}
            >
              Sim, tenho certeza
            </Button>
            <Button
              color="gray"
              onClick={closeModal}
            >
              Não, cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}