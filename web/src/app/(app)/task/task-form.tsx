import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/http/api-client";
import { getSubTypeTaskByTypeTask } from "@/http/get-sub-type-task";
import { getTypeTask } from "@/http/get-type-tasks";

export async function TaskForm() {

    const {typeTasks} = await getTypeTask();

    return (
        <form className="space-y-4">

            <div className="space-y-1">
                <Label htmlFor="typeTask">Select Type Task</Label>
                <Select>
                    <SelectTrigger className="w-[350px]">
                        <SelectValue placeholder="Select Type Tasks" />
                    </SelectTrigger>
                    <SelectContent>
                    {typeTasks.map((typeTask) => (
                        <SelectItem value={typeTask.idTypeTask.toString()}> {typeTask.descriptionTypeTask}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-1">
                <Label htmlFor="subTypeTask">SubType Task</Label>
                <Select>
                    <SelectTrigger className="w-[350px]">
                        <SelectValue placeholder="Select SubType Task" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

            </div>

            <div className="space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input name="title" id="title" className="w-[350px]" />
            </div>

            <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Textarea className="w-[350px]" />



            </div>

            <Button className="w-[350px]" type="submit" >
                Create Task
        
      </Button>
        </form>
    )

}