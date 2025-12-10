import { defineConfig } from "@mikro-orm/postgresql";

export default defineConfig({
  dbName: "poststack-server",
  user: "postgres",
  password: "YOUR_PASSWORD",
  host: "localhost",
  port: 5432,
  entities: ["./dist/entities"],
  entitiesTs: ["./src/entities"],
});
