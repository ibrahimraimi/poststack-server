import "dotenv/config";

import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/post.js";
import mikroOrmConfig from "./mikro-orm.config.js";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  const post = orm.em.create(Post, {
    title: "My first post",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
