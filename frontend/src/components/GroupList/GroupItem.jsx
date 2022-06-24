import { useState } from "react";
import { ConfirmationAlert } from "../ConfirmationAlert";
import { ActionButton } from "./ActionButton";

export function GroupItem() {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)

  function handleOpenDeleteAlert() {
    setIsDeleteAlertOpen(true)
  }

  function handleCloseDeleteAlert() {
    setIsDeleteAlertOpen(false)
  }

  return (
    <div className="bg-slate-100 p-6 flex items-center justify-between shadow-sm rounded-md flex-wrap">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Sudeste</span>
        <span>
          Minas Gerais, Rio de Janeiro, São Paulo, Espírito Santo
        </span>
      </div>
      <div className="flex justify-end gap-2">
        <ActionButton action="edit" onClick={() => { }} />
        <ActionButton action="delete" onClick={handleOpenDeleteAlert} />
      </div>

      <ConfirmationAlert
        isOpen={isDeleteAlertOpen}
        closeModal={handleCloseDeleteAlert}
      />
    </div>
  )
}