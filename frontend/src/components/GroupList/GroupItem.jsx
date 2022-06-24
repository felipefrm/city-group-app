import { useState } from "react";
import { ConfirmationAlert } from "../ConfirmationAlert";
import { ActionButton } from "./ActionButton";
import { CityItem } from "./CityItem";

export function GroupItem({ name, cities }) {
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
        <span className="text-xl font-bold">{name}</span>
        <div className="flex gap-1 mt-2">
          {cities.map(city => (
            <CityItem uf={city.uf} city={city.name} />
          ))}
        </div>
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