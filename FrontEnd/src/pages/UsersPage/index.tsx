import { useEffect, useState } from "react"
import { getUsers } from "../../services/users"
type User = {
  id: string
  name: string
}

export function UsersPage() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}