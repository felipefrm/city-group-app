import { GroupHeader } from "./GroupHeader";
import { GroupItem } from "./GroupItem";

export function GroupList() {
  return (
    <>
      <GroupHeader />
      <div className="flex flex-col gap-2 overflow-y-auto h-[60vh]">
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </div>
    </>
  )
}