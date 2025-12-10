import path from "node:path";
import { defineConfig } from "@mikro-orm/postgresql";

import { Post } from "./entities/post.js";
import { __prod__ } from "./constants.js";

export default defineConfig({
  migrations: {
    path: path.join(import.meta.dirname, "./migrations"),
    // pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "poststack-server",
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  debug: !__prod__,
});
