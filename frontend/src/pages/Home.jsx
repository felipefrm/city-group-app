import { AddNewGroupButton } from "../components/AddNewGroupButton";
import { Footer } from "../components/Footer";
import { GroupList } from "../components/GroupList";
import { Header } from "../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 max-w-[1440px] m-auto -mt-32">
        <AddNewGroupButton />
        <GroupList />
      </main>
      <Footer />
    </>
  )
}