import { api } from "./api-client";

interface GetTypeTaskResponse{
    typeTasks: {
        idTypeTask: number
        descriptionTypeTask: string
    }[]
}

export async function getTypeTask(){
    const result = await api.get('typeTasks').json<GetTypeTaskResponse>()

    return result
}