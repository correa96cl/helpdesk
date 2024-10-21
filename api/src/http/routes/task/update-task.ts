import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../../../lib/prisma";


export async function updateTask(app: FastifyInstance) {

    app.
        withTypeProvider<ZodTypeProvider>()
        .put('/tasks/:taskId/:idState', {
            schema: {
                tags: ['Tasks'],
                summary: 'Update task',
                params: z.object({
                    taskId: z.string().uuid(),
                    idState: z.string(),
                }),
                response: {
                    204: z.null(),
                },
            },

        }, async (request, reply) => {

            const { taskId, idState } = request.params;
            const numberIdState = Number(idState);


            await prisma.task.update({
                where: {
                    idTask: taskId
                },
                data: {
                    idState: numberIdState
                }
            });

            await prisma.history.create({
                data: {
                    taskIdTask: taskId,
                    stateIdState: numberIdState,
                    createdAt: new Date()
                }
            })

            return reply.status(204).send()

        },)

}