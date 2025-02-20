import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  fullname: text('name').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('create_at').notNull().defaultNow(),
})
