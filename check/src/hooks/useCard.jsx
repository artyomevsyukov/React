import { useState, useEffect } from "react"

export function UserCard({ userId }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setIsLoading(false)
      })
  }, [userId])

  if (isLoading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  )
}
