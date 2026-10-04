import postgres from "postgres";
import { neon } from "@neondatabase/serverless"; 

// let client: postgres.Sql | undefined;

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  const sql = neon(process.env.DATABASE_URL);

  return sql;
}