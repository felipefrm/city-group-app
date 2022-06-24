import { useEffect } from "react";
import { useState } from "react";

import { GroupHeader } from "./GroupHeader";
import { GroupItem } from "./GroupItem";

import api from "../../services/api";

export function GroupList() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    api.get('group')
      .then(response => setGroups(response.data))
      .catch(err => console.log(err.message))
  }, [])

  console.log(groups)

  return (
    <>
      <GroupHeader />
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh]">
        {groups.map(group => (
          <GroupItem key={group.id} name={group.name} cities={group.cities} />
        ))}
      </div>
    </>
  )
}