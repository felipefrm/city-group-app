export function CityItem({ uf, city }) {
  return (
    <span className="flex bg-brand-green rounded-md p-2 text-white">
      {uf} - {city}
    </span>
  )
}