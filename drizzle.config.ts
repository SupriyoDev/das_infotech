import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ueb6hu:xau_VdfGd8OHfykxgLMnfFD6kJCSAp9sj5cG@us-east-1.sql.xata.sh/infotech:main?sslmode=require",
  },
});
