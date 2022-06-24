import { Plus } from "phosphor-react";

export function AddNewGroupButton({ ...rest }) {
  return (
    <button
      type="button"
      className="flex self-end mb-4 bg-brand-green p-4 items-center gap-3 rounded-md hover:opacity-60 transition-opacity"
      {...rest}
    >
      <div className="bg-green-600 p-1 rounded-md">
        <Plus size={22} color="#fff" />
      </div>
      <span className="text-white font-bold">ADICIONAR NOVO GRUPO</span>
    </button>
  )
}