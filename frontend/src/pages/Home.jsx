import { Footer } from "../components/Footer";
import { GroupList } from "../components/GroupList";
import { Header } from "../components/Header";
import { AddNewGroupButton } from "../components/AddNewGroupButton";
import { NewGroupModal } from "../components/NewGroup/NewGroupModal";
import { useState } from "react";
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
        <AddNewGroupButton onClick={handleOpenNewGroupModal} />
        <GroupList />
      </main>
      <Footer />

      <NewGroupModal
        isOpen={isNewGroupModalOpen}
        closeModal={handleCloseNewGroupModal}
      />
    </GroupsProvider>
  )
}