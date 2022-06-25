import { useEffect, useState } from "react"
import toast from "react-hot-toast"

import api from "../../services/api"

export function useCity() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    api.get('city')
      .then(response => setCities(response.data))
      .catch(err => toast.error('Falha ao carregar cidades.'))
  }, [])

  return cities
}