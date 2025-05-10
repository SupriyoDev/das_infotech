import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
import { laptopTable, desktopTable } from "./schema";
import { Pool } from "pg";
config();

const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  max: 20,
});
export const db = drizzle(pool, { schema: { laptopTable, desktopTable } });
