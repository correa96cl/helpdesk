import { api } from "./api-client";


interface GetTasksResponse{
    tasks: {
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
    createdAt: string;
    }[]
}


export async function getTasks(){
    const result = await api.get('tasks').json<GetTasksResponse>()
    return result;
}