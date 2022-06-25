import { useState } from "react";

import { GroupHeader } from "./GroupHeader";
import { GroupItem } from "./GroupItem";
import { AddGroupModal } from "../Modal/AddGroupModal";
import { AddGroupButton } from "./AddGroupButton";

import { useGroups } from "../../contexts/groups";

export function GroupList() {
  const { groups } = useGroups()

  const [isNewGroupModalOpen, setIsNewGroupModalOpen] = useState(false)

  function handleOpenNewGroupModal() {
    setIsNewGroupModalOpen(true)
  }

  function handleCloseNewGroupModal() {
    setIsNewGroupModalOpen(false)
  }

  return (
    <main className="flex flex-col gap-2 max-w-[1440px] m-auto px-4 -mt-32">
      <AddGroupButton onClick={handleOpenNewGroupModal} />

      <GroupHeader />
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh]">
        {groups.map(group => (
          <GroupItem key={group.id} group={group} />
        ))}
      </div>

      <AddGroupModal
        isOpen={isNewGroupModalOpen}
        closeModal={handleCloseNewGroupModal}
      />
    </main>
  )
}