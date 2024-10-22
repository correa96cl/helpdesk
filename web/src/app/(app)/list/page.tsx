

import dayjs from 'dayjs'
import { getTasks } from "@/http/get-tasks";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Eye } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import Link from 'next/link'
import relativeTime from 'dayjs/plugin/relativeTime'



export async function ListTasks() {

    dayjs.extend(relativeTime)

    const { tasks } = await getTasks();

    return (
        <div>
            {tasks.length === 0 ? (
                <div>Nao tem tasks criados.</div>
            ) : (
                <div className="mx-auto flex max-w-[1200px] items-center justify-between mt-5">
                    <Table>
                        <TableCaption>A list of your recent tasks.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Number Tasks</TableHead>
                                <TableHead>Type Task</TableHead>
                                <TableHead>SubtypeTask</TableHead>
                                <TableHead className="w-84 text-left">Date</TableHead>
                                <TableHead className="w-44">Title</TableHead>
                                <TableHead className="w-44">Description</TableHead>
                                <TableHead className="w-[20px] text-center">Actions</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {tasks.map((task) => (
                                <TableRow key={task.idTask}>
                                    <TableCell className="font-medium">{task.numberTask}</TableCell>
                                    <TableCell>{task.typeTask.descriptionTypeTask}</TableCell>
                                    <TableCell>{task.subtypeTask.descriptionSubTypeTask}</TableCell>
                                   
                                    
                                    <TableCell className="w-84">
                                    <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                {dayjs(task.createdAt).format(`DD-MM-YYYY h:mm A`)}
                                                </TooltipTrigger>
                                                <TooltipContent>

                                                {dayjs(task.createdAt).fromNow()}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>


                                    </TableCell>
                                    <TableCell className="w-44">{task.title}</TableCell>
                                    <TableCell className="w-44">{task.description}</TableCell>
                                    <TableCell className="w-[20px] text-center">

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link href="/create-organization">
                                                        <Eye className="mr-2" />

                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>

                                                    <p>View Task</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>



                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>
                </div>
            )}


        </div>
    )
}