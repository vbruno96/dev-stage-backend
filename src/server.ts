import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { z } from 'zod'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
})

app.post(
  '/subscriptions',
  {
    schema: {
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

app
  .listen({
    port: 6969,
  })
  .then(() => {
    console.log('🚀 Server is running')
  })
