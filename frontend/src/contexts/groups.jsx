import { createContext, useState, useEffect, useContext } from 'react'
import api from '../services/api'

const GroupsContext = createContext({})

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([])

  console.log(groups)

  useEffect(() => {
    fetch()
  }, [])

  async function fetch() {
    api.get('group')
      .then(response => setGroups(response.data))
      .catch(err => console.log(err.message))
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