import { useState } from "react";

import { Footer } from "../components/Footer";
import { GroupList } from "../components/GroupList";
import { Header } from "../components/Header";
import { AddGroupButton } from "../components/GroupList/AddGroupButton";
import { AddGroupModal } from "../components/Modal/AddGroupModal";
import { GroupsProvider } from "../contexts/groups";

export function Home() {
  const [isNewGroupModalOpen, setIsNewGroupModalOpen] = useState(false)

  function handleOpenNewGroupModal() {
    setIsNewGroupModalOpen(true)
  }

  function handleCloseNewGroupModal() {
    setIsNewGroupModalOpen(false)
  }

  return (
    <GroupsProvider>
      <Header />
      <main className="flex flex-col gap-2 max-w-[1440px] m-auto -mt-32">
        <AddGroupButton onClick={handleOpenNewGroupModal} />
        <GroupList />
      </main>
      <Footer />

      <AddGroupModal
        isOpen={isNewGroupModalOpen}
        closeModal={handleCloseNewGroupModal}
      />
    </GroupsProvider>
  )
}