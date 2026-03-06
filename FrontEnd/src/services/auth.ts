import { api } from "./api"

export async function login(email: string, password: string) {
  const response = await api.post("/sessions", {
    email,
    password

    
  })

  return response.data
}