import { Trash, Pencil } from "phosphor-react";

export function ActionButton({ action, ...rest }) {
  return (
    <button
      className="bg-white p-2 rounded-md shadow-md hover:opacity-70 transition-opacity"
      {...rest}
    >
      {action === 'delete'
        ? <Trash size={24} color="red" />
        : <Pencil size={24} color="gray" />}
    </button>
  )
}