import { api } from "./api";

interface CreateFeedbackRequest {
  nome: string
  descricao: string
}

export async function createFeedback(data: CreateFeedbackRequest) {
  const response = await api.post("/feedbacks", data)

  return response.data
}