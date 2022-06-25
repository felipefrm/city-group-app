import { useState } from "react";

import { DeleteGroupModal } from "../../Modal/DeleteGroupModal";
import { EditGroupModal } from "../../Modal/EditGroupModal";
import { ActionButton } from "./ActionButton";
import { CityItem } from "./CityItem";

export function GroupItem({ group }) {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  function handleOpenDeleteAlert() {
    setIsDeleteAlertOpen(true)
  }

  function handleCloseDeleteAlert() {
    setIsDeleteAlertOpen(false)
  }

  async function handleOpenEditModal() {
    setIsEditModalOpen(true)
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false)
  }

  return (
    <div className="bg-slate-100 p-6 flex items-center justify-between shadow-sm rounded-md flex-wrap">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{group.name}</span>
        <div className="flex gap-1 mt-2">
          {group.cities.map(city => (
            <CityItem key={city.id} uf={city.uf} city={city.name} />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <ActionButton action="edit" onClick={handleOpenEditModal} />
        <ActionButton action="delete" onClick={handleOpenDeleteAlert} />
      </div>

      <DeleteGroupModal
        isOpen={isDeleteAlertOpen}
        closeModal={handleCloseDeleteAlert}
        groupId={group.id}
      />

      <EditGroupModal
        isOpen={isEditModalOpen}
        closeModal={handleCloseEditModal}
        group={group}
      />
    </div>
  )
}