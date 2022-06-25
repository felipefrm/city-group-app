import { useState } from "react";
import toast from 'react-hot-toast';

import { DeleteGroupModal } from "../../Modal/DeleteGroupModal";
import { ActionButton } from "./ActionButton";
import { CityItem } from "./CityItem";
import { useGroups } from "../../../contexts/groups";
import api from "../../../services/api";

export function GroupItem({ group }) {
  const {groups, setGroups} = useGroups()
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)

  function handleOpenDeleteAlert() {
    setIsDeleteAlertOpen(true)
  }

  function handleCloseDeleteAlert() {
    setIsDeleteAlertOpen(false)
  }

  async function handleDeleteGroup() {
    await api.delete(`group/${group.id}`)

    setGroups(groups.filter(g => g.id !== group.id))

    handleCloseDeleteAlert()
    toast.success('Grupo removido com sucesso!')
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
        <ActionButton action="edit" onClick={() => { }} />
        <ActionButton action="delete" onClick={handleOpenDeleteAlert} />
      </div>

      <DeleteGroupModal
        isOpen={isDeleteAlertOpen}
        closeModal={handleCloseDeleteAlert}
        handleDeleteGroup={handleDeleteGroup}
      />
    </div>
  )
}