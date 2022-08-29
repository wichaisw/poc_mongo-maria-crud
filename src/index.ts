import fastify from 'fastify';
import "reflect-metadata";
import formBodyPlugin from '@fastify/formbody';

import userRouter from './domains/user/user.router';
import postRouter from './domains/post/post.router';
import * as dotenv from 'dotenv';
import { mariaDataSource, mongoDataSource } from './utils/database';
dotenv.config();

const PORT: number = Number(process.env.PORT) || 8000;

mongoDataSource
  .initialize()
  .then(() => {
    console.log("Mongo Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Mongo Data Source initialization: ", err);
  })

mariaDataSource
  .initialize()
  .then(() => {
    console.log('Maria Data Source has been initialized!');
  })
  .catch(err => {
    console.error("Error during Maria Data Source initialization: ", err);
  })

const server = fastify()

server.register(formBodyPlugin); 
server.register(userRouter, {prefix: '/users'});
server.register(postRouter, {prefix: '/posts'});

server.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})