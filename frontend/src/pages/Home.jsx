import { useState } from "react";

import { Footer } from "../components/Footer";
import { GroupList } from "../components/GroupList";
import { Header } from "../components/Header";

import { GroupsProvider } from "../contexts/groups";

export function Home() {
  return (
    <GroupsProvider>
      <Header />
      <GroupList />
      <Footer />
    </GroupsProvider>
  )
}