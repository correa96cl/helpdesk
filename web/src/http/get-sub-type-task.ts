import { api } from "./api-client"


interface GetSubTypeTaskResponse{
    subTypeTask: {
        idSubTypeTask: number
        descriptionSubTypeTask: string
    }[]
}
export async function getSubTypeTaskByTypeTask(idTypeTask: string){

    const result = await api.get(`subTypeTasks/${idTypeTask}`).json<GetSubTypeTaskResponse>()
    return result

}