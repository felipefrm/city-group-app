import { GroupHeader } from "./GroupHeader";
import { GroupItem } from "./GroupItem";

import { useGroups } from "../../contexts/groups";

export function GroupList() {
  const { groups } = useGroups()

  return (
    <>
      <GroupHeader />
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh]">
        {groups.map(group => (
          <GroupItem key={group.id} group={group} />
        ))}
      </div>
    </>
  )
}