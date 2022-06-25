import { createContext, useState, useEffect, useContext } from 'react'
import toast from 'react-hot-toast'
import api from '../services/api'

const GroupsContext = createContext({})

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch()
  }, [])

  async function fetch() {
    api.get('group')
      .then(response => setGroups(response.data))
      .catch(err => toast.error('Falha ao carregar grupos.'))
  }

  return (
    <GroupsContext.Provider value={{ groups, setGroups, refetch: fetch }}>
      {children}
    </GroupsContext.Provider>
  )
}

export function useGroups() {
  return useContext(GroupsContext)
}