import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { InterceptedSheetContent } from "@/components/intercepted-sheet-content";
import { TaskForm } from "../../task/task-form";


export default function CreateTask(){
    return (

        <Sheet defaultOpen>
           <InterceptedSheetContent>

          <SheetHeader>
            <SheetTitle>Create Task</SheetTitle>

          </SheetHeader>
          <div className="py-4">
          <TaskForm/>
          </div>
        </InterceptedSheetContent>
      </Sheet>
        
       
    )
}