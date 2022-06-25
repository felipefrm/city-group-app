export function CityItem({ uf, city }) {
  return (
    <span className="flex bg-brand-green rounded-md p-2 text-white shadow-sm">
      {city} - {uf} 
    </span>
  )
}