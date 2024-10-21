import { getTasks } from "@/http/get-tasks";


export async function ListTasks() {

    const { tasks } = await getTasks();

    return (
        <div>

            {tasks.map((task) => (
                <div key={task.idTask}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.typeTask.descriptionTypeTask}</p>
                    <p>{task.subtypeTask.descriptionSubTypeTask}</p>
                </div>
            ))}
        </div>
    )
}