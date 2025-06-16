// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { pgTableCreator, pgTable, text, serial } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `t3_${name}`);

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});
