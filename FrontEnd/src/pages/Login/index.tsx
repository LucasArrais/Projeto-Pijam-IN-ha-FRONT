import { useState } from "react"
import { login } from "../../services/auth"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    const data = await login(email, password)

    // SALVAR TOKEN
    localStorage.setItem("token", data.token)

  }

  return (
    <div>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Entrar
      </button>
    </div>
  )
}