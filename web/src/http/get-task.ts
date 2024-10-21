import { api } from "./api-client"

interface GetTaskResponse{
    task: {
        idTask: string;
    numberTask: number | null;
    title: string;
    description: string;
     user: {
        idUser: string | null;
    } | null;
    typeTask: {
        idTypeTask: number;
        descriptionTypeTask: string;
    };
    subtypeTask: {
        idSubTypeTask: number;
        descriptionSubTypeTask: string;
    };
    idState: number;
    }
}

export async function getTask(taskId: string){
    const result = await api.get(`task/${taskId}`).json<GetTaskResponse>()

  return result
}