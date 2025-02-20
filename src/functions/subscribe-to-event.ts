import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'

interface SubscribeToEventParams {
  fullname: string
  email: string
}

export async function subscribeToEvent({
  email,
  fullname,
}: SubscribeToEventParams) {
  const result = await db
    .insert(subscriptions)
    .values({
      fullname,
      email,
    })
    .returning()

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id,
  }
}
