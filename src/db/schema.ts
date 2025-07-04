import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const student = pgTable("trainee", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  age: integer("age"),
  email: varchar("email", { length: 255 }),
});
