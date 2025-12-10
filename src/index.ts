import "dotenv/config";

import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const main = async () => {
  const orm = await MikroORM.init({
    dbName: `${DB_NAME}`,
    user: `${DB_USER}`,
    password: `${DB_PASSWORD}`,
    debug: !__prod__,
    entities: [Post],
  });
};

main().catch((err) => {
  console.error(err);
});
