import { prisma } from "../../../lib/prisma";

export async function getNumberTask(){

    const history = await prisma.history.findMany({
        select: {
            taskIdTask: true,
            stateIdState: true,
            createdAt: true
        }
    });

    return history 
}