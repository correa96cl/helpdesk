import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../../../lib/prisma";
import { BadRequestError } from "../error/bad-request-error";


export async function getTaskById(app: FastifyInstance) {

    app.
        withTypeProvider<ZodTypeProvider>()
        .get('/task/:taskId/', {
            schema: {
                tags: ['Tasks'],
                summary: 'Obtain Task By Id',
                params: z.object({
                    taskId: z.string().uuid(),
                }),
                response: {
                    200: z.object({
                        idTask: z.string().uuid(),
                        numberTask: z.number().nullable(),
                        title: z.string(),
                        description: z.string(),
                        user: z.object({
                            idUser: z.string()
                        }).nullable(),
                        typeTask: z.object({
                            idTypeTask: z.number(),
                            descriptionTypeTask: z.string()
                        }),
                        subtypeTask: z.object({
                            idSubTypeTask: z.number(),
                            descriptionSubTypeTask: z.string()
                        }),
                        idState: z.number(),
                    }),
                },
            },

        }, async (request, reply) => {

            const { taskId } = request.params;
          


            const task = await prisma.task.findUnique({
                select: {
                    idTask: true,
                    numberTask: true,
                    title: true,
                    description: true,
                    user: true,
                    typeTask: true,
                    subtypeTask: true,
                    idState: true
                },
                where: {
                    idTask: taskId
                }
            })

            if (!task) {
                throw new BadRequestError('Task not found')

            }

            return reply.send(task)

        },)

}