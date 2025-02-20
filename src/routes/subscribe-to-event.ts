import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscribeToEvent: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribe someone to the event',
        tags: ['subscription'],
        body: z.object({
          fullname: z.string().min(3, 'Digite o nome completo'),
          email: z.string().email('Digite um email válido'),
        }),
        response: {
          201: z.object({
            fullname: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { fullname, email } = request.body

      return reply.status(201).send({
        fullname,
      })
    }
  )
}
