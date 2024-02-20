//src/schema/users.ts
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("todo", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

