import { api } from "./api-client";

interface CreateTaskRequest {
    title: string
    description: string
    status: number
    userId: string | null
    idTypeTask: number
    idSubTypeTask: number
}

type CreateTaskResponse = void

export async function createTask({
    title,
    description,
    status,
    userId,
    idTypeTask,
    idSubTypeTask
}: CreateTaskRequest): Promise<CreateTaskResponse> {
    await api.post('tasks', {
        json: {
            title,
            description,
            status,
            userId,
            idTypeTask,
            idSubTypeTask
        }
    })
}