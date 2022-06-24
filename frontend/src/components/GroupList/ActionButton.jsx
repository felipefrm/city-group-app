import { HiOutlineTrash, HiOutlinePencilAlt } from 'react-icons/hi'

export function ActionButton({ action, ...rest }) {
  return (
    <button
      className="bg-white p-2 rounded-md shadow-md hover:opacity-70 transition-opacity"
      {...rest}
    >
      {action === 'delete'
        ? <HiOutlineTrash size={24} color="red" />
        : <HiOutlinePencilAlt size={24} color="gray" />}
    </button>
  )
}