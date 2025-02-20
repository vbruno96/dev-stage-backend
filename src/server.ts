import {fastify} from "fastify"
import {fastifyCors} from '@fastify/cors'
const app = fastify()

app.register(fastifyCors, {
  origin: true
})

app.get('/hello', () => {
  return {
    message: 'Hello World'
  }
})

app.listen({
  port: 6969
}).then(() => {
  console.log('🚀 Server is running')
})